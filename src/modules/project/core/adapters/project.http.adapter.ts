import { IProjectPort } from '@/modules/project/core/port/project.port'
import { ApiService } from '@/modules/app/core/service/api.service'
import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'

export class ProjectHttpAdapter implements IProjectPort {
  constructor(private api: ApiService) {}

  async createProject(data: ProjectDomainModel.CreateProjectDto): Promise<ProjectDomainModel.ProjectOverview> {
    try {
      const res = await this.api.post<ProjectDomainModel.ProjectOverview>('/api/projects', data)

      return res
    } catch (error) {
      throw new Error(
        `Failed to create project with name ${data.name}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async deleteProject(id: string): Promise<boolean> {
    try {
      const res = await this.api.delete<{ success: boolean }>(`/api/projects/${id}`)

      return res.success
    } catch (error) {
      throw new Error(
        `Failed to delete project with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async getProjectById(id: string): Promise<Nullable<ProjectDomainModel.ProjectOverview>> {
    try {
      const res = await this.api.get<ProjectDomainModel.ProjectOverview>(`/api/projects/${id}`)

      return res
    } catch (error) {
      throw new Error(`Failed to get project with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async listProjects(): Promise<ProjectDomainModel.ProjectOverview[]> {
    try {
      const res = await this.api.get<ProjectDomainModel.ProjectOverview[]>(`/api/projects`)

      return res
    } catch (error) {
      throw new Error(`Failed to list projects: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async updateProject(
    id: string,
    data: ProjectDomainModel.UpdateProjectDto
  ): Promise<Nullable<ProjectDomainModel.ProjectOverview>> {
    try {
      const res = await this.api.put<ProjectDomainModel.ProjectOverview>(`/api/projects/${id}`, data)

      return res
    } catch (error) {
      throw new Error(
        `Failed to update project with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }
}
