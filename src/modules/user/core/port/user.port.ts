import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'

export interface IUserPort {
  /*
  Queries
   */
  getAll(): Promise<UserDomainModel.User[]>

  getById(id: string): Promise<UserDomainModel.User>

  getByEmail(email: string): Promise<UserDomainModel.User>

  /*
  Commands
   */
  create(payload: UserDomainModel.CreateUserPayload): Promise<UserDomainModel.User>

  update(id: string, payload: UserDomainModel.UpdateUserPayload): Promise<UserDomainModel.User>
}
