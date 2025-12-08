import { ApiService } from '@/modules/app/core/service/api.service'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { ITaskPort } from '@/modules/task/core/port/task.port'

export class TaskHttpAdapter implements ITaskPort {
  constructor(private api: ApiService) {}

  async listTasks(): Promise<TaskDomainModel.TaskOverview[]> {
    try {
      const res = await this.api.get<TaskDomainModel.TaskOverview[]>(`/api/tasks`)

      return res
    } catch (error) {
      throw new Error(`Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getTaskById(id: string): Promise<Nullable<TaskDomainModel.TaskOverview>> {
    try {
      const res = await this.api.get<Nullable<TaskDomainModel.TaskOverview>>(`/api/tasks/${id}`)

      return res
    } catch (error) {
      throw new Error(`Failed to get task with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async createTask(data: TaskDomainModel.CreateTaskDto): Promise<TaskDomainModel.TaskOverview> {
    try {
      const res = await this.api.post<TaskDomainModel.TaskOverview>(`/api/tasks`, data)

      return res
    } catch (error) {
      throw new Error(
        `Failed to create task with name ${data.name}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async updateTask(id: string, data: TaskDomainModel.UpdateTaskDto): Promise<TaskDomainModel.TaskOverview> {
    try {
      const res = await this.api.put<TaskDomainModel.TaskOverview>(`/api/tasks/${id}`, data)

      return res
    } catch (error) {
      throw new Error(`Failed to update task with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async deleteTask(id: string): Promise<boolean> {
    try {
      const res = await this.api.delete<boolean>(`/api/tasks/${id}`)

      return res
    } catch (error) {
      throw new Error(`Failed to delete task with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
