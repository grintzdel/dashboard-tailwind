import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'

export function useUpdateUser(): UseMutationResult<
  UserDomainModel.User,
  Error,
  { id: string; payload: UserDomainModel.UpdateUserPayload }
> {
  const queryClient = useQueryClient()

  return useMutation<UserDomainModel.User, Error, { id: string; payload: UserDomainModel.UpdateUserPayload }>({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string
      payload: UserDomainModel.UpdateUserPayload
    }): Promise<UserDomainModel.User> => {
      const data = await app.dependencies.userGateway.update(id, payload)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['user', variables.id] })
    },
  })
}
