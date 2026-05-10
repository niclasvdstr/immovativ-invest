'use client'

import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center whitespace-nowrap font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-[linear-gradient(135deg,#1e3a8a_0%,#2563EB_100%)] text-white hover:brightness-110 shadow-green hover:shadow-lg hover:-translate-y-0.5 focus:ring-brand-green',
    secondary: 'bg-brand-anthrazit text-white hover:bg-gray-800 hover:-translate-y-0.5 focus:ring-gray-700',
    outline: 'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {children}
    </button>
  )
}
