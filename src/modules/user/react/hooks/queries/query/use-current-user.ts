import { app } from '@/modules/app/core/main'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useCurrentUser(): UseQueryResult<UserDomainModel.User, Error> {
  const username = app.api.getUsernameFromToken()

  return useQuery<UserDomainModel.User>({
    queryKey: ['currentUser', username],
    queryFn: async (): Promise<UserDomainModel.User> => {
      if (!username) {
        throw new Error('No username found in token')
      }
      const data = await app.dependencies.userGateway.getByEmail(username)
      return data
    },
    enabled: !!username,
  })
}
