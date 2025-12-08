'use client'

import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { LoginForm } from '@/modules/auth/react/components/login-form'
import { useLogin } from '@/modules/auth/react/hooks/queries/mutation/use-login'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const loginMutation = useLogin()

  const handleLogin = async (credentials: AuthDomainModel.LoginDto) => {
    try {
      await loginMutation.mutateAsync(credentials)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return <LoginForm onSubmit={handleLogin} isPending={loginMutation.isPending} error={loginMutation.error} />
}
