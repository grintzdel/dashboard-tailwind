import { app } from '@/modules/app/core/main'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export function useGetTaskById(id: string): UseQueryResult<Nullable<TaskDomainModel.TaskOverview>, Error> {
  return useQuery<Nullable<TaskDomainModel.TaskOverview>>({
    queryKey: ['tasks', id],
    queryFn: async (): Promise<Nullable<TaskDomainModel.TaskOverview>> => {
      const data = await app.dependencies.taskGateway.getTaskById(id)
      return data
    },
    enabled: !!id,
  })
}
