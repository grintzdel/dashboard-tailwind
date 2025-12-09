import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useCountTasks(): DefinedUseQueryResult<number, Error> {
  return useQuery<number>({
    queryKey: ['tasks', 'count'],
    queryFn: async (): Promise<number> => {
      const data = await app.dependencies.taskGateway.countTasks()
      return data
    },
    initialData: () => 0,
  })
}
