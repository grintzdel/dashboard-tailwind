import { IAuthGateway } from '@/modules/auth/core/port/gateway.auth'
import { IUserGateway } from '@/modules/user/core/port/gateway.user'

export type Dependencies = {
  authGateway: IAuthGateway
  userGateway: IUserGateway
}
