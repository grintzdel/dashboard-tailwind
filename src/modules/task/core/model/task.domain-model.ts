import { TaskStatusEnum } from '@/modules/task/enums/task-status.enum'

export namespace TaskDomainModel {
  export type TaskOverview = {
    id: string
    name: string
    description: string
    projectId: string
    status: TaskStatusEnum
    assignedTo: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Nullable<Date>
  }

  export type CreateTaskDto = Pick<TaskOverview, 'name' | 'description' | 'projectId' | 'assignedTo' | 'status'>

  export type UpdateTaskDto = Partial<CreateTaskDto>

  export enum StatusMetadataKeys {
    STATUS = 'Status',
    PERCENTAGE = 'Percentage',
    DUE_DATE = 'Due Date',
  }

  type StatusMetadata = {
    key: StatusMetadataKeys.STATUS
    value: TaskStatusEnum
  }

  type PercentageMetadata = {
    key: StatusMetadataKeys.PERCENTAGE
    value: number
  }

  type DueDateMetadata = {
    key: StatusMetadataKeys.DUE_DATE
    value: Date | string
  }

  export type TaskMetadata = StatusMetadata | PercentageMetadata | DueDateMetadata
}
