import { Middleware } from '@reduxjs/toolkit'
import { PERSISTED_SLICES, PERSISTED_STATE_STORAGE_KEY } from '../constants/persist.constants'

export const persistMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()

  const persistedData = PERSISTED_SLICES.reduce(
    (acc, slice) => ({
      ...acc,
      [slice]: state[slice],
    }),
    {}
  )

  try {
    localStorage.setItem(PERSISTED_STATE_STORAGE_KEY, JSON.stringify(persistedData))
  } catch (error) {
    console.warn('Unable to save state in localStorage:', error)
  }

  return result
}
