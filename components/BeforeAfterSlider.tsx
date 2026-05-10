'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  alt?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  alt = 'Vorher-Nachher Vergleich',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }, [])

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging) return
    setPosition(getPercent(e.clientX))
  }, [dragging, getPercent])

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging) return
    e.preventDefault()
    setPosition(getPercent(e.touches[0].clientX))
  }, [dragging, getPercent])

  const stopDrag = useCallback(() => setDragging(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stopDrag)
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', stopDrag)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stopDrag)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', stopDrag)
    }
  }, [onMouseMove, onTouchMove, stopDrag])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl shadow-xl select-none cursor-ew-resize"
      style={{ aspectRatio: '16/7' }}
      onMouseDown={(e) => { e.preventDefault(); setDragging(true); setPosition(getPercent(e.clientX)) }}
      onTouchStart={(e) => { setDragging(true); setPosition(getPercent(e.touches[0].clientX)) }}
    >
      {/* After image — full width base layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before image — same size, clipped to the left by clipPath */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Handle circle */}
      <div
        className="absolute top-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
      >
        <svg className="w-5 h-5 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/55 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-white/90 text-brand-anthrazit text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
        {afterLabel}
      </div>
    </div>
  )
}
