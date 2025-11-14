'use client'

import { CiFolderOn, CiUser } from 'react-icons/ci'
import { VscPercentage, VscPinned } from 'react-icons/vsc'
import { StatsTilesContainer, StatTile } from '@/modules/task/react/components/stat-tile'

export default function StatSection() {
  return (
    <section>
      <StatsTilesContainer>
        <StatTile statsTileTitle="Active Employees" icon={CiUser} value="547" />
        <StatTile statsTileTitle="Number of Projects" icon={CiFolderOn} value="339" />
        <StatTile statsTileTitle="Number of Task" icon={VscPinned} value="147" />
        <StatTile statsTileTitle="Target Percentage Completed" icon={VscPercentage} value="89.75%" />
      </StatsTilesContainer>
    </section>
  )
}
