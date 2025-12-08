import { IEmployeePort } from '@/modules/employee/core/port/employee.port'
import { ApiService } from '@/modules/app/core/service/api.service'
import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'

export class EmployeeHttpAdapter implements IEmployeePort {
  constructor(private api: ApiService) {}

  async listEmployees(): Promise<EmployeeDomainModel.EmployeeOverview[]> {
    try {
      const res = await this.api.get<EmployeeDomainModel.EmployeeOverview[]>(`/api/employees`)

      return res
    } catch (error) {
      throw new Error(`Failed to list employees: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getEmployeeById(id: string): Promise<Nullable<EmployeeDomainModel.EmployeeOverview>> {
    try {
      const res = await this.api.get<Nullable<EmployeeDomainModel.EmployeeOverview>>(`/api/employees/${id}`)

      return res
    } catch (error) {
      throw new Error(`Failed to get employee with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async createEmployee(data: EmployeeDomainModel.CreateEmployeeDto): Promise<EmployeeDomainModel.EmployeeOverview> {
    try {
      const res = await this.api.post<EmployeeDomainModel.EmployeeOverview>(`/api/employees`, data)

      return res
    } catch (error) {
      throw new Error(
        `Failed to create employee with name ${data.firstName} ${data.lastName}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async updateEmployee(
    id: string,
    data: EmployeeDomainModel.UpdateEmployeeDto
  ): Promise<EmployeeDomainModel.EmployeeOverview> {
    try {
      const res = await this.api.put<EmployeeDomainModel.EmployeeOverview>(`/api/employees/${id}`, data)

      return res
    } catch (error) {
      throw new Error(
        `Failed to update employee with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async deleteEmployee(id: string): Promise<boolean> {
    try {
      const res = await this.api.delete<boolean>(`/api/employees/${id}`)

      return res
    } catch (error) {
      throw new Error(
        `Failed to delete employee with id ${id}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }
}
