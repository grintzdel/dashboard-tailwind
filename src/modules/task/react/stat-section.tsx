'use client'

import { CiFolderOn } from 'react-icons/ci'
import { VscPercentage, VscPinned } from 'react-icons/vsc'
import { StatsTilesContainer, StatTile } from '@/modules/task/react/components/stat-tile'
import { ActiveEmployeesTile } from '@/modules/employee/react/components/active-employees-tile'

export default function StatSection() {
  return (
    <section>
      <StatsTilesContainer>
        <ActiveEmployeesTile />
        <StatTile statsTileTitle="Number of Projects" icon={CiFolderOn} value="339" />
        <StatTile statsTileTitle="Number of Task" icon={VscPinned} value="147" />
        <StatTile statsTileTitle="Target Percentage Completed" icon={VscPercentage} value="89.75%" />
      </StatsTilesContainer>
    </section>
  )
}
