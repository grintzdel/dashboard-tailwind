import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'

export interface IProjectPort {
  /*
  Commands
   */
  createProject(data: ProjectDomainModel.CreateProjectDto): Promise<ProjectDomainModel.ProjectOverview>

  deleteProject(id: string): Promise<boolean>

  updateProject(
    id: string,
    data: ProjectDomainModel.UpdateProjectDto
  ): Promise<Nullable<ProjectDomainModel.ProjectOverview>>

  /*
  Queries
   */
  getProjectById(id: string): Promise<Nullable<ProjectDomainModel.ProjectOverview>>

  listProjects(): Promise<ProjectDomainModel.ProjectOverview[]>
}
