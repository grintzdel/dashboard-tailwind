import { app } from '@/modules/app/core/main'
import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateEmployee(): UseMutationResult<
  EmployeeDomainModel.EmployeeOverview,
  Error,
  EmployeeDomainModel.CreateEmployeeDto
> {
  const queryClient = useQueryClient()

  return useMutation<EmployeeDomainModel.EmployeeOverview, Error, EmployeeDomainModel.CreateEmployeeDto>({
    mutationFn: async (
      payload: EmployeeDomainModel.CreateEmployeeDto
    ): Promise<EmployeeDomainModel.EmployeeOverview> => {
      const data = await app.dependencies.employeeGateway.createEmployee(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
  })
}
