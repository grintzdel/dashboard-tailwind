'use client'

import { useLogout } from '@/modules/auth/react/hooks/queries/mutation/use-logout'
import { useEffect } from 'react'

export default function LogoutPage() {
  const logoutMutation = useLogout()

  useEffect(() => {
    logoutMutation.mutate()
  }, [])

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #1b58f5 100%)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h2 className="text-3xl font-bold text-black">Déconnexion</h2>
          <p className="mt-2 text-sm text-black/70">
            {logoutMutation.isPending ? 'Déconnexion en cours...' : 'Vous avez été déconnecté avec succès'}
          </p>
        </div>

        {logoutMutation.error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600">
            Une erreur est survenue lors de la déconnexion
          </div>
        )}

        {!logoutMutation.isPending && !logoutMutation.error && (
          <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-600">
            Redirection vers la page de connexion...
          </div>
        )}
      </div>
    </div>
  )
}
