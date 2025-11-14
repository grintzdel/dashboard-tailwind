'use client'

import { ALERT_TEMPLATES } from '@/modules/task/core/constants/alert-templates'
import { Alert } from '@/ui/alert'
import { JSX } from 'react'
import { MdOutlineNotificationAdd } from 'react-icons/md'

export default function AlertSection(): JSX.Element {
  const alertText = ALERT_TEMPLATES.PERFORMANCE_DECLINE.replace('[name]', 'Hermawan').replace('[period]', '2 weeks')

  return (
    <section>
      <Alert
        icon={MdOutlineNotificationAdd}
        title="Dear Manager"
        text={alertText}
        buttonHref="#"
        buttonText="View Details"
      />
    </section>
  )
}
