import { app } from '@/modules/app/core/main'
import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query'

export function useListProjects(): DefinedUseQueryResult<ProjectDomainModel.ProjectOverview[], Error> {
  return useQuery<ProjectDomainModel.ProjectOverview[]>({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectDomainModel.ProjectOverview[]> => {
      const data = await app.dependencies.projectGateway.listProjects()
      return data
    },
    initialData: () => [],
  })
}
