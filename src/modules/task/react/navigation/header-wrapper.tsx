'use client'

import { Header, type HeaderProps } from '@/ui/header'
import { FiBell, FiSettings } from 'react-icons/fi'
import { useAuthState } from '@/modules/auth/react/hooks/use-auth-state'

export const HeaderWrapper = () => {
  const { user } = useAuthState()

  const getInitials = (name: string): string => {
    return name.charAt(0).toUpperCase()
  }

  const headerConfig: HeaderProps = {
    user: {
      name: user?.name || 'Guest',
      initials: user?.name ? getInitials(user.name) : 'G',
    },
    searchPlaceholder: 'Start searching here...',
    actions: [
      {
        icon: FiSettings,
      },
      {
        icon: FiBell,
      },
    ],
  }

  return <Header {...headerConfig} />
}
