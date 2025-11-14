import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDomainModel } from '@/modules/user/core/model/user.domain-model'

type AuthState = {
  user: UserDomainModel.User | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDomainModel.User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, clearUser } = authSlice.actions
export const authReducer = authSlice.reducer
