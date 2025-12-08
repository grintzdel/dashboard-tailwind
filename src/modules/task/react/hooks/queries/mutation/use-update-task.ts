import { app } from '@/modules/app/core/main'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

type UpdateTaskPayload = {
  id: string
  data: TaskDomainModel.UpdateTaskDto
}

export function useUpdateTask(): UseMutationResult<TaskDomainModel.TaskOverview, Error, UpdateTaskPayload> {
  const queryClient = useQueryClient()

  return useMutation<TaskDomainModel.TaskOverview, Error, UpdateTaskPayload>({
    mutationFn: async (payload: UpdateTaskPayload): Promise<TaskDomainModel.TaskOverview> => {
      const data = await app.dependencies.taskGateway.updateTask(payload.id, payload.data)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['tasks', variables.id] })
    },
  })
}
