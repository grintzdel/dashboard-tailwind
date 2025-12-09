'use client'

import { StatTile } from '@/modules/task/react/components/stat-tile'
import { useCountTasks } from '@/modules/task/react/hooks/queries/query/use-count-tasks'
import { VscPinned } from 'react-icons/vsc'

export const NumberOfTasksTile = () => {
  const { data: count, isLoading } = useCountTasks()

  return <StatTile statsTileTitle="Number of Task" icon={VscPinned} value={isLoading ? '...' : count.toString()} />
}
