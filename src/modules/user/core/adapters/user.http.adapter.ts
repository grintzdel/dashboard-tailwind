import { ApiService } from '@/modules/app/core/service/api.service'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'
import { IUserPort } from '@/modules/user/core/port/user.port'

export class UserHttpAdapter implements IUserPort {
  constructor(private api: ApiService) {}

  async getAll(): Promise<UserDomainModel.User[]> {
    try {
      const res = await this.api.get<Array<{ data: UserDomainModel.User }>>('/api/users')

      return res.map((item) => item.data)
    } catch (error) {
      throw new Error(`Failed to get all users: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getById(id: string): Promise<UserDomainModel.User> {
    try {
      const res = await this.api.get<{ data: UserDomainModel.User }>(`/api/users/${id}`)

      return res.data
    } catch (error) {
      throw new Error(`Failed to get user with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  async getByEmail(email: string): Promise<UserDomainModel.User> {
    try {
      const res = await this.api.get<{ data: UserDomainModel.User }>(`/api/users/email/${email}`)

      return res.data
    } catch (error) {
      throw new Error(
        `Failed to get user with email ${email}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async create(payload: UserDomainModel.CreateUserPayload): Promise<UserDomainModel.User> {
    try {
      const res = await this.api.post<{ data: UserDomainModel.User }>('/api/users', payload)

      return res.data
    } catch (error) {
      throw new Error(
        `Failed to create user with email ${payload.email}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async update(id: string, payload: UserDomainModel.UpdateUserPayload): Promise<UserDomainModel.User> {
    try {
      const res = await this.api.put<{ data: UserDomainModel.User }>(`/api/users/${id}`, payload)

      return res.data
    } catch (error) {
      throw new Error(`Failed to update user with id ${id}: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
