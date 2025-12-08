import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { app } from '@/modules/app/core/main'
import { ProjectDomainModel } from '@/modules/project/core/model/project.domain-model'

export function useGetProjectById(id: string): UseQueryResult<Nullable<ProjectDomainModel.ProjectOverview>, Error> {
  return useQuery<Nullable<ProjectDomainModel.ProjectOverview>>({
    queryKey: ['projects', id],
    queryFn: async (): Promise<Nullable<ProjectDomainModel.ProjectOverview>> => {
      const data = await app.dependencies.projectGateway.getProjectById(id)
      return data
    },
    enabled: !!id,
  })
}
