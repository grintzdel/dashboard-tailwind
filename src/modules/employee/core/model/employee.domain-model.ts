import { EmployeeStatusEnum } from '@/modules/employee/core/enums/employee-status.enum'

export namespace EmployeeDomainModel {
  export type EmployeeOverview = {
    id: string
    firstName: string
    lastName: string
    email: string
    position: string
    taskIds: string[]
    status: EmployeeStatusEnum
    createdAt: Date
    updatedAt: Date
    deletedAt: Nullable<Date>
  }

  export type CreateEmployeeDto = Omit<EmployeeOverview, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'taskIds'> & {
    taskIds?: Nullable<string[]>
    status: EmployeeStatusEnum.ACTIVE
  }

  export type UpdateEmployeeDto = Partial<CreateEmployeeDto>
}
