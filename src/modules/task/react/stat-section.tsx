'use client'

import { StatsTilesContainer } from '@/modules/task/react/components/stat-tile'
import { ActiveEmployeesTile } from '@/modules/employee/react/components/active-employees-tile'
import { NumberOfProjectsTile } from '@/modules/project/react/components/number-of-projects-tile'
import { NumberOfTasksTile } from '@/modules/task/react/components/number-of-tasks-tile'
import { TargetPercentageCompletedTile } from '@/modules/analytics/react/components/target-percentage-completed-tile'

export default function StatSection() {
  return (
    <section>
      <StatsTilesContainer>
        <ActiveEmployeesTile />
        <NumberOfProjectsTile />
        <NumberOfTasksTile />
        <TargetPercentageCompletedTile />
      </StatsTilesContainer>
    </section>
  )
}
