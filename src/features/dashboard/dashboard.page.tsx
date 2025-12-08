import AlertSection from '@/modules/task/react/alert-section'
import StatSection from '@/modules/task/react/stat-section'
import TaskSection from '@/modules/task/react/task-section'
import React from 'react'

export default function DashboardPage() {
  return (
    <React.Fragment>
      <AlertSection />
      <StatSection />
      <TaskSection />
    </React.Fragment>
  )
}
