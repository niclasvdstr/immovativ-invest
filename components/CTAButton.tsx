'use client'

import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
}: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center'

  const variants = {
    primary: 'bg-[linear-gradient(135deg,#1e3a8a_0%,#2563EB_100%)] text-white hover:brightness-110 shadow-green hover:shadow-lg hover:-translate-y-0.5 focus:ring-brand-green',
    secondary: 'bg-brand-anthrazit text-white hover:bg-gray-800 hover:-translate-y-0.5 focus:ring-gray-700',
    outline: 'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green',
    white: 'bg-white text-brand-anthrazit hover:bg-gray-50 hover:-translate-y-0.5 shadow-soft hover:shadow-medium focus:ring-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm',
    md: 'px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base',
    lg: 'px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg',
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
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  )
}
