import { app } from '@/modules/app/core/main'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useDeleteProject(): UseMutationResult<boolean, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<boolean, Error, string>({
    mutationFn: async (id: string): Promise<boolean> => {
      const data = await app.dependencies.projectGateway.deleteProject(id)
      return data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['projects', id] })
    },
  })
}
