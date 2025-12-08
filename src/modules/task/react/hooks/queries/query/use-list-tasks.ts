import { app } from '@/modules/app/core/main'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useListTasks(): DefinedUseQueryResult<TaskDomainModel.TaskOverview[], Error> {
  return useQuery<TaskDomainModel.TaskOverview[]>({
    queryKey: ['tasks'],
    queryFn: async (): Promise<TaskDomainModel.TaskOverview[]> => {
      const data = await app.dependencies.taskGateway.listTasks()
      return data
    },
    initialData: () => [],
  })
}
