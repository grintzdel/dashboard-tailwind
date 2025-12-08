import { AuthDomainModel } from '@/modules/auth/core/model/auth.domain-model'
import React, { useState } from 'react'
import { UserRolesEnum } from '@/modules/user/core/enums/user-roles.enum'

type RegisterFormProps = {
  onSubmit: (credentials: AuthDomainModel.RegisterDto) => void
  isPending: boolean
  error: Error | null
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isPending, error }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      name,
      email,
      password,
      role: UserRolesEnum.USER,
    })
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #1b58f5 100%)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Inscription</h2>
          <p className="mt-2 text-sm text-black/70">Créez votre compte</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
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
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600">
              {error.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-[#1b58f5] px-4 py-3 font-semibold text-white transition-all hover:bg-[#1547d9] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? 'Inscription...' : "S'inscrire"}
          </button>

          <div className="text-center text-sm">
            <span className="text-black/70">Déjà un compte ? </span>
            <a href="/login" className="font-medium text-[#1b58f5] hover:text-[#1547d9]">
              Se connecter
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
