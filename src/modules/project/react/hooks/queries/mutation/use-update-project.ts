import { app } from '@/modules/app/core/main'
import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

type UpdateProjectPayload = {
  id: string
  data: ProjectDomainModel.UpdateProjectDto
}

export function useUpdateProject(): UseMutationResult<
  Nullable<ProjectDomainModel.ProjectOverview>,
  Error,
  UpdateProjectPayload
> {
  const queryClient = useQueryClient()

  return useMutation<Nullable<ProjectDomainModel.ProjectOverview>, Error, UpdateProjectPayload>({
    mutationFn: async (payload: UpdateProjectPayload): Promise<Nullable<ProjectDomainModel.ProjectOverview>> => {
      const data = await app.dependencies.projectGateway.updateProject(payload.id, payload.data)
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['projects', variables.id] })
    },
  })
}
