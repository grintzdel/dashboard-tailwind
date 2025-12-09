import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'

export interface IAnalyticsPort {
  /*
  Queries
   */

  listProjectsByPeriod(
    params?: AnalyticsDomainModel.PeriodQueryParams
  ): Promise<AnalyticsDomainModel.ProjectsByPeriod[]>

  getProjectsCompleted(params?: AnalyticsDomainModel.PeriodQueryParams): Promise<AnalyticsDomainModel.ProjectsCompleted>

  getTasksCompleted(params?: AnalyticsDomainModel.PeriodQueryParams): Promise<AnalyticsDomainModel.TasksCompleted>

  listTasksPerEmployee(): Promise<AnalyticsDomainModel.TasksPerEmployee[]>
}
