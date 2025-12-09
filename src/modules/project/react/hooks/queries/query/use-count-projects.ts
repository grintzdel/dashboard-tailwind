import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useCountProjects(): DefinedUseQueryResult<number, Error> {
  return useQuery<number>({
    queryKey: ['projects', 'count'],
    queryFn: async (): Promise<number> => {
      const data = await app.dependencies.projectGateway.countProjects()
      return data
    },
    initialData: () => 0,
  })
}
