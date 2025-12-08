import { AppStore, createStore } from '@/modules/app/core/store/store'
import { AuthHttpAdapter } from '@/modules/auth/core/adapters/auth.http.adapter'
import { EmployeeHttpAdapter } from '@/modules/employee/core/adapters/employee.http.adapter'
import { ProjectHttpAdapter } from '@/modules/project/core/adapters/project.http.adapter'
import { UserHttpAdapter } from '@/modules/user/core/adapters/user.http.adapter'
import { ApiService } from './service/api.service'
import { Dependencies } from './store/dependencies'
import { TaskHttpAdapter } from '@/modules/task/core/adapters/task.http.adapter'

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
      authGateway: new AuthHttpAdapter(this.api),
      userGateway: new UserHttpAdapter(this.api),
      projectGateway: new ProjectHttpAdapter(this.api),
      employeeGateway: new EmployeeHttpAdapter(this.api),
      taskGateway: new TaskHttpAdapter(this.api),
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
