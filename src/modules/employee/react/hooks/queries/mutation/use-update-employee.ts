import { app } from '@/modules/app/core/main'
import { EmployeeDomainModel } from '@/modules/employee/core/model/employee.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

type UpdateEmployeePayload = {
  id: string
  data: EmployeeDomainModel.UpdateEmployeeDto
}

export function useUpdateEmployee(): UseMutationResult<
  Nullable<EmployeeDomainModel.EmployeeOverview>,
  Error,
  UpdateEmployeePayload
> {
  const queryClient = useQueryClient()

  return useMutation<Nullable<EmployeeDomainModel.EmployeeOverview>, Error, UpdateEmployeePayload>({
    mutationFn: async (payload: UpdateEmployeePayload): Promise<Nullable<EmployeeDomainModel.EmployeeOverview>> => {
      const data = await app.dependencies.employeeGateway.updateEmployee(payload.id, payload.data)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['employees'] })
      queryClient.invalidateQueries({ queryKey: ['employees', variables.id] })
    },
  })
}
