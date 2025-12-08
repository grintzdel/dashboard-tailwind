import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateUser(): UseMutationResult<UserDomainModel.User, Error, UserDomainModel.CreateUserPayload> {
  const queryClient = useQueryClient()

  return useMutation<UserDomainModel.User, Error, UserDomainModel.CreateUserPayload>({
    mutationFn: async (payload: UserDomainModel.CreateUserPayload): Promise<UserDomainModel.User> => {
      const data = await app.dependencies.userGateway.create(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
