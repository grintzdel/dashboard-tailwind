import { ApiService } from './service/api.service'
import { Dependencies } from './store/dependencies'
import { AppStore, createStore } from '@/modules/app/core/store/store'
import { HttpAuth } from '@/modules/auth/core/adapters/http.auth'
import { HttpUser } from '@/modules/user/core/adapters/http.user'

export class App {
  private static instance: App
  public readonly api: ApiService
  public readonly dependencies: Dependencies
  public readonly store: AppStore

  private constructor() {
    this.api = new ApiService()

    if (this.api.isTokenExpired()) {
      this.api.clearToken()
    }

    this.dependencies = {
      authGateway: new HttpAuth(this.api),
      userGateway: new HttpUser(this.api),
    }

    this.store = createStore({ dependencies: this.dependencies })
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App()
    }
    return App.instance
  }
}

export const app = App.getInstance()
