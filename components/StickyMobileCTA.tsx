'use client'
import { useEffect, useState } from 'react'
import CTAButton from './CTAButton'

interface StickyMobileCTAProps {
  href: string
  label: string
}

export default function StickyMobileCTA({ href, label }: StickyMobileCTAProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px (past the hero section CTAs)
      setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-white border-t border-brand-gray-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <CTAButton href={href} fullWidth size="lg">
        {label}
      </CTAButton>
    </div>
  )
}
