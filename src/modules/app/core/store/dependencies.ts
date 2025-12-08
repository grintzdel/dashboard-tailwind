import { IAuthPort } from '@/modules/auth/core/port/auth.port'
import { IUserPort } from '@/modules/user/core/port/user.port'

export type Dependencies = {
  authGateway: IAuthPort
  userGateway: IUserPort
}
