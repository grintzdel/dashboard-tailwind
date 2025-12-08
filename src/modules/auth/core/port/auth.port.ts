import { AuthDomainModel } from '../model/auth.domain-model'

export interface IAuthPort {
  login(credentials: AuthDomainModel.LoginCredentials): Promise<AuthDomainModel.TokenResponse>

  register(credentials: AuthDomainModel.RegisterCredentials): Promise<AuthDomainModel.TokenResponse>

  logout(): Promise<void>
}
