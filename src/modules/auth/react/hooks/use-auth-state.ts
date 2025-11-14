import { useSelector } from 'react-redux'
import { AppState } from '@/modules/app/core/store/store'

export function useAuthState() {
  const { user, isAuthenticated } = useSelector((state: AppState) => state.auth)

  return {
    user,
    isAuthenticated,
  }
}
