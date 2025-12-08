import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'

export interface IEmployeePort {
  /*
  Queries
   */
  listEmployees(): Promise<EmployeeDomainModel.EmployeeOverview[]>

  getEmployeeById(id: string): Promise<Nullable<EmployeeDomainModel.EmployeeOverview>>

  /*
  Commands
   */
  createEmployee(data: EmployeeDomainModel.CreateEmployeeDto): Promise<EmployeeDomainModel.EmployeeOverview>

  updateEmployee(
    id: string,
    data: EmployeeDomainModel.UpdateEmployeeDto
  ): Promise<Nullable<EmployeeDomainModel.EmployeeOverview>>

  deleteEmployee(id: string): Promise<boolean>
}
