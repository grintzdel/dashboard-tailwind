'use client'

import { useGetTasksCompleted } from '@/modules/analytics/react/hooks/queries/query/use-get-tasks-completed'
import { StatTile } from '@/modules/task/react/components/stat-tile'
import { VscPercentage } from 'react-icons/vsc'

export const TargetPercentageCompletedTile = () => {
  const { data, isLoading, error } = useGetTasksCompleted()

  if (isLoading || !data) {
    return <StatTile statsTileTitle="Target Percentage Completed" icon={VscPercentage} value="..." />
  }

  if (error) {
    return <StatTile statsTileTitle="Target Percentage Completed" icon={VscPercentage} value="Error" />
  }

  const completionRate: number = data.completionRate ?? 0
  const formattedRate = `${completionRate.toFixed(2)}%`

  return <StatTile statsTileTitle="Target Percentage Completed" icon={VscPercentage} value={formattedRate} />
}
