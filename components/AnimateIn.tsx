'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'fade'
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Immediately reveal if already in viewport on mount
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const base = 'transition-all duration-700 ease-out'
  const hidden = direction === 'up' ? 'opacity-0 translate-y-8' : 'opacity-0'
  const shown = 'opacity-100 translate-y-0'

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({
  children,
  className = '',
  index = 0,
}: {
  children: React.ReactNode
  className?: string
  index?: number
}) {
  return (
    <AnimateIn delay={index * 100} className={className}>
      {children}
    </AnimateIn>
  )
}
