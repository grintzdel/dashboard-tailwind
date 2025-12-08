import { HeaderWrapper } from '@/modules/task/react/navigation/header-wrapper'
import { SidebarWrapper } from '@/modules/task/react/navigation/sidebar-wrapper'
import React from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <React.Fragment>
      <SidebarWrapper />
      <HeaderWrapper />
      <main className="mt-20 ml-64 p-8">{children}</main>
    </React.Fragment>
  )
}
