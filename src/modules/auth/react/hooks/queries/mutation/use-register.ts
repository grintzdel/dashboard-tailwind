import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'

export function useRegister(): UseMutationResult<
  AuthDomainModel.TokenResponse,
  Error,
  AuthDomainModel.RegisterCredentials
> {
  return useMutation<AuthDomainModel.TokenResponse, Error, AuthDomainModel.RegisterCredentials>({
    mutationFn: async (credentials: AuthDomainModel.RegisterCredentials): Promise<AuthDomainModel.TokenResponse> => {
      const data = await app.dependencies.authGateway.register(credentials)
      return data
    },
    onSuccess: (response) => {
      app.api.setToken(response.token, response.expiresIn)
    },
  })
}
