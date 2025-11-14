import { IAuthGateway } from '../port/gateway.auth'
import { AuthDomainModel } from '../model/auth.domain-model'
import { ApiService } from '@/modules/app/core/service/api.service'

export class HttpAuth implements IAuthGateway {
  constructor(private api: ApiService) {}

  async login(credentials: AuthDomainModel.LoginCredentials): Promise<AuthDomainModel.TokenResponse> {
    try {
      const res = await this.api.post<AuthDomainModel.TokenResponse>('/api/auth/login', credentials)

      return res
    } catch (error) {
      throw new Error(
        `Failed to login with email ${credentials.email}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async register(credentials: AuthDomainModel.RegisterCredentials): Promise<AuthDomainModel.TokenResponse> {
    try {
      const res = await this.api.post<AuthDomainModel.TokenResponse>('/api/auth/register', credentials)

      return res
    } catch (error) {
      throw new Error(
        `Failed to register with email ${credentials.email}: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  }

  async logout(): Promise<void> {
    try {
      this.api.clearToken()
    } catch (error) {
      throw new Error(`Failed to logout: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
