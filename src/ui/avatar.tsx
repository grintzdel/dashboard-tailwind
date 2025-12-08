import React, { JSX } from 'react'
import Image from 'next/image'

type AvatarProps = {
  src?: string
  alt: string
  initials?: string
  className?: string
}

export type AvatarsListProps = {
  children: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, className = '' }: AvatarProps): JSX.Element => {
  if (initials && !src) {
    return (
      <div
        className={`flex items-center justify-center rounded-full border border-white bg-[#1b58f5] font-semibold text-white ${className}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <Image
      src={src || ''}
      alt={alt}
      width={10}
      height={10}
      className={`rounded-full border border-white object-cover ${className}`}
    />
  )
}

export const AvatarsList = ({ children }: AvatarsListProps): JSX.Element => {
  return <div className="flex flex-row -space-x-2">{children}</div>
}
