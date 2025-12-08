import { app } from '@/modules/app/core/main'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateTask(): UseMutationResult<TaskDomainModel.TaskOverview, Error, TaskDomainModel.CreateTaskDto> {
  const queryClient = useQueryClient()

  return useMutation<TaskDomainModel.TaskOverview, Error, TaskDomainModel.CreateTaskDto>({
    mutationFn: async (payload: TaskDomainModel.CreateTaskDto): Promise<TaskDomainModel.TaskOverview> => {
      const data = await app.dependencies.taskGateway.createTask(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}
