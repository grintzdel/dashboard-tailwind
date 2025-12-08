import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class ApiService {
  private readonly axiosInstance: AxiosInstance
  private token: string | null = null

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    this.setupInterceptors()
    this.loadTokenFromStorage()
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.clearToken()
        }
        return Promise.reject(error)
      }
    )
  }

  private loadTokenFromStorage(): void {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token')
      if (token) {
        this.token = token
      }
    }
  }

  public setToken(token: string, expiresIn: number): void {
    this.token = token
    if (typeof window !== 'undefined') {
      const expirationTime = Date.now() + expiresIn * 1000

      localStorage.setItem('auth_token', token)
      localStorage.setItem('token_expiration', expirationTime.toString())

      document.cookie = `auth_token=${token}; path=/; max-age=${expiresIn}; SameSite=Lax`
      document.cookie = `token_expiration=${expirationTime}; path=/; max-age=${expiresIn}; SameSite=Lax`
    }
  }

  public getToken(): string | null {
    return this.token
  }

  public clearToken(): void {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('token_expiration')
      localStorage.removeItem('current_user')

      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'token_expiration=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  }

  public isTokenExpired(): boolean {
    if (typeof window === 'undefined') return true

    const expiration = localStorage.getItem('token_expiration')
    if (!expiration) return true

    return Date.now() >= parseInt(expiration, 10)
  }

  public getUserIdFromToken(): string | null {
    if (!this.token) return null

    try {
      const payload = this.token.split('.')[1]
      const decoded = JSON.parse(atob(payload))
      return decoded.userId || null
    } catch (error) {
      console.warn('Failed to decode token:', error)
      return null
    }
  }

  public getUsernameFromToken(): string | null {
    if (!this.token) return null

    try {
      const payload = this.token.split('.')[1]
      const decoded = JSON.parse(atob(payload))
      return decoded.username || null
    } catch (error) {
      console.warn('Failed to decode token:', error)
      return null
    }
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, config)
    return response.data
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config)
    return response.data
  }

  public async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config)
    return response.data
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config)
    return response.data
  }
}
