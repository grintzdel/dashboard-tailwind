import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'

export function useLogout(): UseMutationResult<void, Error, void> {
  return useMutation<void, Error, void>({
    mutationFn: async (): Promise<void> => {
      await app.dependencies.authGateway.logout()
    },
  })
}
