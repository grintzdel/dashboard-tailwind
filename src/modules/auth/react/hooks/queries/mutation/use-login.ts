import { app } from '@/modules/app/core/main'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'

export function useLogin(): UseMutationResult<AuthDomainModel.TokenResponse, Error, AuthDomainModel.LoginCredentials> {
  return useMutation<AuthDomainModel.TokenResponse, Error, AuthDomainModel.LoginCredentials>({
    mutationFn: async (credentials: AuthDomainModel.LoginCredentials): Promise<AuthDomainModel.TokenResponse> => {
      const data = await app.dependencies.authGateway.login(credentials)
      return data
    },
  })
}
