import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useUserById(id: string): UseQueryResult<UserDomainModel.User, Error> {
  return useQuery<UserDomainModel.User>({
    queryKey: ['user', id],
    queryFn: async (): Promise<UserDomainModel.User> => {
      const data = await app.dependencies.userGateway.getById(id)
      return data
    },
    enabled: !!id,
  })
}
