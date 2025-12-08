import { app } from '@/modules/app/core/main'
import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useGetEmployeeById(id: string): UseQueryResult<Nullable<EmployeeDomainModel.EmployeeOverview>, Error> {
  return useQuery<Nullable<EmployeeDomainModel.EmployeeOverview>>({
    queryKey: ['employees', id],
    queryFn: async (): Promise<Nullable<EmployeeDomainModel.EmployeeOverview>> => {
      const data = await app.dependencies.employeeGateway.getEmployeeById(id)
      return data
    },
    enabled: !!id,
  })
}
