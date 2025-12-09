'use client'

import { StatTile } from '@/modules/task/react/components/stat-tile'
import { useCountActiveEmployees } from '@/modules/employee/react/hooks/queries/query/use-count-active-employees'
import { CiUser } from 'react-icons/ci'

export const ActiveEmployeesTile = () => {
  const { data: count, isLoading } = useCountActiveEmployees()

  return <StatTile statsTileTitle="Active Employees" icon={CiUser} value={isLoading ? '...' : count.toString()} />
}
