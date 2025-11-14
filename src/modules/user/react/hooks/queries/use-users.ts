import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'

export function useUsers(): DefinedUseQueryResult<UserDomainModel.User[], Error> {
  return useQuery<UserDomainModel.User[]>({
    queryKey: ['users'],
    queryFn: async (): Promise<UserDomainModel.User[]> => {
      const data = await app.dependencies.userGateway.getAll()
      return data
    },
    initialData: () => [],
  })
}
