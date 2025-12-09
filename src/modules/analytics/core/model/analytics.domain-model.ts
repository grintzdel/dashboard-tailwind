import { AnalyticsPeriodEnum } from '@/modules/analytics/core/enums/analytics-period.enum'

export namespace AnalyticsDomainModel {
  export type ProjectsByPeriod = {
    period: AnalyticsPeriodEnum
    periodNumber: number
    periodLabel: string
    count: number
    year: number
  }

  export type ProjectsCompleted = {
    totalProjects: number
    completedProjects: number
    completionRate: number
    inProgressProjects: number
    todoProjects: number
  }

  export type TasksCompleted = {
    totalTasks: number
    completedTasks: number
    completionRate: number
    inProgressTasks: number
    todoTasks: number
  }

  export type TasksPerEmployee = {
    employeeId: string
    firstName: string
    lastName: string
    email: string
    totalTasks: number
    completedTasks: number
    inProgressTasks: number
    todoTasks: number
    completionRate: number
  }

  export type PeriodQueryParams = {
    period?: Nullable<AnalyticsPeriodEnum>
    year?: Nullable<number>
  }
}
