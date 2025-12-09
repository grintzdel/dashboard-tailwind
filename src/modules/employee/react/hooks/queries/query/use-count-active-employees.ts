import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useCountActiveEmployees(): DefinedUseQueryResult<number, Error> {
  return useQuery<number>({
    queryKey: ['employees', 'count-active'],
    queryFn: async (): Promise<number> => {
      const data = await app.dependencies.employeeGateway.countActiveEmployees()
      return data
    },
    initialData: () => 0,
  })
}
