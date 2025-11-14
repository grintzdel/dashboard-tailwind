import { Action, combineReducers, configureStore, createListenerMiddleware, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { Dependencies } from './dependencies'
import { PERSISTED_STATE_STORAGE_KEY } from '@/modules/app/core/constants/persist.constants'
import { persistMiddleware } from '@/modules/app/core/middleware/persist.middleware'
import { authReducer } from '@/modules/auth/core/store/auth.slice'

const reducers = combineReducers({
  auth: authReducer,
})

export type AppStore = ReturnType<typeof createStore>
export type AppState = ReturnType<typeof reducers>
export type AppDispatch = ThunkDispatch<AppState, Dependencies, Action>
export type AppGetState = AppStore['getState']

const getPersistedState = () => {
  if (typeof window === 'undefined') {
    return undefined
  }

  try {
    const savedState = localStorage.getItem(PERSISTED_STATE_STORAGE_KEY)
    return savedState ? JSON.parse(savedState) : {}
  } catch (error) {
    console.warn('Unable to retrieve state from localStorage:', error)
    return {}
  }
}

export const createStore = (config: { initialState?: AppState; dependencies: Dependencies; isTest?: boolean }) => {
  const persistedState = config.isTest ? {} : getPersistedState()

  const store = configureStore({
    preloadedState: {
      ...config?.initialState,
      ...persistedState,
    },
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => {
      const listener = createListenerMiddleware()

      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      })
        .prepend(listener.middleware)
        .concat(persistMiddleware)
    },
  })

  return store
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
