export namespace UserDomainModel {
  export type Role = 'ROLE_USER' | 'ROLE_ARTIST' | 'ROLE_MODERATOR' | 'ROLE_ADMIN'

  export type User = {
    id: string
    name: string
    email: string
    role: Role
    createdAt: string
    updatedAt: string
  }

  export type CreateUserPayload = {
    name: string
    email: string
    password: string
    role: Role
  }

  export type UpdateUserPayload = Partial<Exclude<CreateUserPayload, 'password'>>
}
