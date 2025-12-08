'use client'

import { useLogin } from '@/modules/auth/react/hooks/queries/mutation/use-login'
import { LoginForm } from '@/modules/auth/react/components/login-form'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const loginMutation = useLogin()

  const handleLogin = async (credentials: AuthDomainModel.LoginCredentials) => {
    try {
      await loginMutation.mutateAsync(credentials)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return <LoginForm onSubmit={handleLogin} isPending={loginMutation.isPending} error={loginMutation.error} />
}
