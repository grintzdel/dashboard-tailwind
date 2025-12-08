import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'
import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useListTasksPerEmployee(): DefinedUseQueryResult<AnalyticsDomainModel.TasksPerEmployee[], Error> {
  return useQuery<AnalyticsDomainModel.TasksPerEmployee[]>({
    queryKey: ['analytics', 'tasks-per-employee'],
    queryFn: async (): Promise<AnalyticsDomainModel.TasksPerEmployee[]> => {
      const data = await app.dependencies.analyticsGateway.listTasksPerEmployee()
      return data
    },
    initialData: () => [],
  })
}
