import { AuthDomainModel } from '../model/auth.domain-model'

export interface IAuthPort {
  login(credentials: AuthDomainModel.LoginDto): Promise<AuthDomainModel.TokenResponse>

  register(credentials: AuthDomainModel.RegisterDto): Promise<AuthDomainModel.TokenResponse>

  logout(): Promise<void>
}
