export namespace EmployeeDomainModel {
  export type EmployeeOverview = {
    id: string
    firstName: string
    lastName: string
    email: string
    position: string
    taskIds: string[]
    createdAt: Date
    updatedAt: Date
    deletedAt: Nullable<Date>
  }

  export type CreateEmployeeDto = Omit<EmployeeOverview, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'taskIds'> & {
    taskIds?: Nullable<string[]>
  }

  export type UpdateEmployeeDto = Partial<CreateEmployeeDto>
}
