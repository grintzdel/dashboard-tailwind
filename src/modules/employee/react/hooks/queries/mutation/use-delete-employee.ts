import { app } from '@/modules/app/core/main'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useDeleteEmployee(): UseMutationResult<boolean, Error, string> {
  const queryClient = useQueryClient()

  return useMutation<boolean, Error, string>({
    mutationFn: async (id: string): Promise<boolean> => {
      const data = await app.dependencies.employeeGateway.deleteEmployee(id)
      return data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
      queryClient.invalidateQueries({ queryKey: ['employees', id] })
    },
  })
}
