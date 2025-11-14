'use client'

import { Dependencies } from '@/modules/app/core/store/dependencies'
import React, { createContext, useContext } from 'react'

const DependenciesContext = createContext<Nullable<Dependencies>>(null)

type DependenciesProviderProps = Readonly<{
  dependencies: Dependencies
  children: React.ReactNode
}>

export const DependenciesProvider: React.FC<DependenciesProviderProps> = ({ dependencies, children }) => {
  return <DependenciesContext.Provider value={dependencies}>{children}</DependenciesContext.Provider>
}

export const useDependencies = () => useContext(DependenciesContext)
