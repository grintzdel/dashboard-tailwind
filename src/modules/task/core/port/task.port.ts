import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'

export interface ITaskPort {
  /*
  Queries
   */
  listTasks(): Promise<TaskDomainModel.TaskOverview[]>

  getTaskById(id: string): Promise<Nullable<TaskDomainModel.TaskOverview>>

  /*
  Commands
   */
  createTask(data: TaskDomainModel.CreateTaskDto): Promise<TaskDomainModel.TaskOverview>

  updateTask(id: string, data: TaskDomainModel.UpdateTaskDto): Promise<TaskDomainModel.TaskOverview>

  deleteTask(id: string): Promise<boolean>
}
