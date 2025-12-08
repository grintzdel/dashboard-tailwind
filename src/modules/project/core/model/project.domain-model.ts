export namespace ProjectDomainModel {
  export type ProjectOverview = {
    id: string
    name: string
    description: string
    taskIds: string[]
    createdAt: Date
    updatedAt: Date
    deletedAt: Nullable<Date>
  }
  export type CreateProjectDto = Pick<ProjectOverview, 'name' | 'description'>

  export type UpdateProjectDto = Partial<CreateProjectDto>
}
