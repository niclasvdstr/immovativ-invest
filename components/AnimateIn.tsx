'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'fade' | 'scale' | 'left' | 'right'
  duration?: number
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
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
      { rootMargin: '-40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const easing = 'cubic-bezier(0.16, 1, 0.3, 1)'

  const hiddenStyles: Record<string, React.CSSProperties> = {
    up:    { opacity: 0, transform: 'translateY(40px)' },
    fade:  { opacity: 0 },
    scale: { opacity: 0, transform: 'scale(0.94)' },
    left:  { opacity: 0, transform: 'translateX(-32px)' },
    right: { opacity: 0, transform: 'translateX(32px)' },
  }

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
        ...(visible ? visibleStyle : hiddenStyles[direction]),
      }}
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
    <AnimateIn delay={index * 120} className={className}>
      {children}
    </AnimateIn>
  )
}
