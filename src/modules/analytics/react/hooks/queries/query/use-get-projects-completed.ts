import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'
import { app } from '@/modules/app/core/main'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useGetProjectsCompleted(
  params?: AnalyticsDomainModel.PeriodQueryParams
): UseQueryResult<AnalyticsDomainModel.ProjectsCompleted, Error> {
  return useQuery<AnalyticsDomainModel.ProjectsCompleted>({
    queryKey: ['analytics', 'projects-completed', params],
    queryFn: async (): Promise<AnalyticsDomainModel.ProjectsCompleted> => {
      const data = await app.dependencies.analyticsGateway.getProjectsCompleted(params)
      return data
    },
  })
}
