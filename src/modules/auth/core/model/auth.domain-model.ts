import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'

export namespace AuthDomainModel {
  export type TokenResponse = {
    token: string
    expiresIn: number
  }

  export type LoginCredentials = {
    email: string
    password: string
  }

  export type RegisterCredentials = LoginCredentials & {
    name: string
    role?: Extract<UserDomainModel.Role, 'ROLE_USER'>
  }
}
