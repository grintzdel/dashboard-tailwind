import { app } from '@/modules/app/core/main'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useDeleteTask(): UseMutationResult<boolean, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<boolean, Error, string>({
    mutationFn: async (id: string): Promise<boolean> => {
      const data = await app.dependencies.taskGateway.deleteTask(id)
      return data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['tasks', id] })
    },
  })
}
