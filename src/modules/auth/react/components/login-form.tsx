import React, { useState } from 'react'
import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'

type LoginFormProps = {
  onSubmit: (credentials: AuthDomainModel.LoginCredentials) => void
  isPending: boolean
  error: Error | null
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isPending, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #662d99 0%, #241a33 45%, #141318 100%)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Connexion</h2>
          <p className="mt-2 text-sm text-white/60">Connectez-vous à votre compte</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? 'Connexion...' : 'Se connecter'}
          </button>

          <div className="text-center text-sm">
            <span className="text-white/60">Pas encore de compte ? </span>
            <a href="/register" className="font-medium text-purple-400 hover:text-purple-300">
              Créer un compte
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
