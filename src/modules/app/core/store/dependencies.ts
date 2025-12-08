import { IAuthPort } from '@/modules/auth/core/port/auth.port'
import { IUserPort } from '@/modules/user/core/port/user.port'
import { IProjectPort } from '@/modules/project/core/port/project.port'
import { IEmployeePort } from '@/modules/employee/core/port/employee.port'
import { ITaskPort } from '@/modules/task/core/port/task.port'

export type Dependencies = {
  authGateway: IAuthPort
  userGateway: IUserPort
  projectGateway: IProjectPort
  employeeGateway: IEmployeePort
  taskGateway: ITaskPort
}
