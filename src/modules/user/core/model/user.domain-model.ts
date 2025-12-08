import { UserRolesEnum } from '@/modules/user/core/enums/user-roles.enum'

export namespace UserDomainModel {
  export type User = {
    id: string
    name: string
    email: string
    role: UserRolesEnum
    createdAt: string
    updatedAt: string
  }

  export type CreateUserPayload = {
    name: string
    email: string
    password: string
    role: UserRolesEnum
  }

  export type UpdateUserPayload = Partial<Exclude<CreateUserPayload, 'password'>>
}
