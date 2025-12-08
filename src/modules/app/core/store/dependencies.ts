import { IAuthPort } from '@/modules/auth/core/port/auth.port'
import { IUserPort } from '@/modules/user/core/port/user.port'
import { IProjectPort } from '@/modules/project/core/port/project.port'

export type Dependencies = {
  authGateway: IAuthPort
  userGateway: IUserPort
  projectGateway: IProjectPort
}
