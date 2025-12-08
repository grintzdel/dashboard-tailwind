import { app } from '@/modules/app/core/main'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'

export function useRegister(): UseMutationResult<AuthDomainModel.TokenResponse, Error, AuthDomainModel.RegisterDto> {
  return useMutation<AuthDomainModel.TokenResponse, Error, AuthDomainModel.RegisterDto>({
    mutationFn: async (credentials: AuthDomainModel.RegisterDto): Promise<AuthDomainModel.TokenResponse> => {
      const data = await app.dependencies.authGateway.register(credentials)
      return data
    },
    onSuccess: (response) => {
      app.api.setToken(response.token, response.expiresIn)
    },
  })
}
