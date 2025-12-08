import { app } from '@/modules/app/core/main'
import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useListEmployees(): DefinedUseQueryResult<EmployeeDomainModel.EmployeeOverview[], Error> {
  return useQuery<EmployeeDomainModel.EmployeeOverview[]>({
    queryKey: ['employees'],
    queryFn: async (): Promise<EmployeeDomainModel.EmployeeOverview[]> => {
      const data = await app.dependencies.employeeGateway.listEmployees()
      return data
    },
    initialData: () => [],
  })
}
