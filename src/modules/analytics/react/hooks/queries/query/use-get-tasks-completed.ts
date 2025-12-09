import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'
import { app } from '@/modules/app/core/main'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useGetTasksCompleted(
  params?: AnalyticsDomainModel.PeriodQueryParams
): UseQueryResult<AnalyticsDomainModel.TasksCompleted, Error> {
  return useQuery<AnalyticsDomainModel.TasksCompleted>({
    queryKey: ['analytics', 'tasks-completed', params],
    queryFn: async (): Promise<AnalyticsDomainModel.TasksCompleted> => {
      const data = await app.dependencies.analyticsGateway.getTasksCompleted(params)
      return data
    },
  })
}
