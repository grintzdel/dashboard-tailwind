import { UserRolesEnum } from '@/modules/user/core/enums/user-roles.enum'

export namespace AuthDomainModel {
  export type TokenResponse = {
    token: string
    expiresIn: number
  }

  export type LoginDto = {
    email: string
    password: string
  }

  export type RegisterDto = LoginDto & {
    name: string
    role: UserRolesEnum.USER
  }
}
