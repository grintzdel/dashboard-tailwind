import { app } from '@/modules/app/core/main'
import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'
import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

export function useCreateProject(): UseMutationResult<
  ProjectDomainModel.ProjectOverview,
  Error,
  ProjectDomainModel.CreateProjectDto
> {
  const queryClient = useQueryClient()

  return useMutation<ProjectDomainModel.ProjectOverview, Error, ProjectDomainModel.CreateProjectDto>({
    mutationFn: async (payload: ProjectDomainModel.CreateProjectDto): Promise<ProjectDomainModel.ProjectOverview> => {
      const data = await app.dependencies.projectGateway.createProject(payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })
}
