import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'
import { app } from '@/modules/app/core/main'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useListProjectsByPeriod(
  params?: AnalyticsDomainModel.PeriodQueryParams
): DefinedUseQueryResult<AnalyticsDomainModel.ProjectsByPeriod[], Error> {
  return useQuery<AnalyticsDomainModel.ProjectsByPeriod[]>({
    queryKey: ['analytics', 'projects-by-period', params],
    queryFn: async (): Promise<AnalyticsDomainModel.ProjectsByPeriod[]> => {
      const data = await app.dependencies.analyticsGateway.listProjectsByPeriod(params)
      return data
    },
    initialData: () => [],
  })
}
