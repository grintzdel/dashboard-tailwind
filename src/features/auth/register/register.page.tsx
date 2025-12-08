'use client'

import { useRegister } from '@/modules/auth/react/hooks/queries/mutation/use-register'
import { RegisterForm } from '@/modules/auth/react/components/register-form'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const registerMutation = useRegister()

  const handleRegister = async (credentials: AuthDomainModel.RegisterDto) => {
    try {
      await registerMutation.mutateAsync(credentials)
      router.push('/login')
    } catch (error) {
      console.error('Register failed:', error)
    }
  }

  return (
    <RegisterForm onSubmit={handleRegister} isPending={registerMutation.isPending} error={registerMutation.error} />
  )
}
