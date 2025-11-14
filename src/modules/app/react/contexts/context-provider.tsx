'use client'

import { app } from '@/modules/app/core/main'
import { DependenciesProvider } from '@/modules/app/react/contexts/dependencies-provider'
import { AuthInitializer } from '@/modules/auth/react/components/auth-initializer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

type ContextProviderProps = Readonly<{
  children: ReactNode
}>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={app.store}>
        <DependenciesProvider dependencies={app.dependencies}>
          <AuthInitializer>{children}</AuthInitializer>
        </DependenciesProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default ContextProvider
