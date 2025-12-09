import { AnalyticsDomainModel } from '@/modules/analytics/core/model/analytics.domain-model'
import { IAnalyticsPort } from '@/modules/analytics/core/port/analytics.port'
import { ApiService } from '@/modules/app/core/service/api.service'

export class AnalyticsHttpAdapter implements IAnalyticsPort {
  constructor(private api: ApiService) {}

  async listProjectsByPeriod(
    params?: Nullable<AnalyticsDomainModel.PeriodQueryParams>
  ): Promise<AnalyticsDomainModel.ProjectsByPeriod[]> {
    try {
      const res = await this.api.get<AnalyticsDomainModel.ProjectsByPeriod[]>(`/api/analytics/projects-by-period`, {
        params,
      })

      return res
    } catch (error) {
      throw new Error(`Failed to get projects by period: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getProjectsCompleted(
    params?: Nullable<AnalyticsDomainModel.PeriodQueryParams>
  ): Promise<AnalyticsDomainModel.ProjectsCompleted> {
    try {
      const res = await this.api.get<AnalyticsDomainModel.ProjectsCompleted>(
        `/api/analytics/projects-completed-by-period`,
        { params }
      )

      return res
    } catch (error) {
      throw new Error(`Failed to get projects completed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getTasksCompleted(
    params?: Nullable<AnalyticsDomainModel.PeriodQueryParams>
  ): Promise<AnalyticsDomainModel.TasksCompleted> {
    try {
      const res = await this.api.get<{ data: AnalyticsDomainModel.TasksCompleted } | AnalyticsDomainModel.TasksCompleted>(
        `/api/analytics/tasks-completed-by-period`,
        { params }
      )

      if (typeof res === 'object' && res !== null && 'data' in res) {
        return res.data
      }

      return res as AnalyticsDomainModel.TasksCompleted
    } catch (error) {
      throw new Error(`Failed to get tasks completed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async listTasksPerEmployee(): Promise<AnalyticsDomainModel.TasksPerEmployee[]> {
    try {
      const res = await this.api.get<AnalyticsDomainModel.TasksPerEmployee[]>(`/api/analytics/tasks-per-employee`)

      return res
    } catch (error) {
      throw new Error(`Failed to get tasks per employee: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
