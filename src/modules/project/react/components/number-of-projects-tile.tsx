'use client'

import { StatTile } from '@/modules/task/react/components/stat-tile'
import { useCountProjects } from '@/modules/project/react/hooks/queries/query/use-count-projects'
import { CiFolderOn } from 'react-icons/ci'

export const NumberOfProjectsTile = () => {
  const { data: count, isLoading } = useCountProjects()

  return <StatTile statsTileTitle="Number of Projects" icon={CiFolderOn} value={isLoading ? '...' : count.toString()} />
}
