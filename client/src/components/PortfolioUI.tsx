import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MapPin, Plane } from 'lucide-react'

export const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.16 })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.68, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: ReactNode; copy?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'section-intro--light' : ''}`}>
      <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function ImageSlot({
  src,
  alt,
  name,
  index = 0,
  className = '',
  dark = false,
  objectFit = 'cover',
}: {
  src?: string
  alt?: string
  name?: string
  index?: number
  className?: string
  dark?: boolean
  objectFit?: 'cover' | 'contain'
}) {
  const [error, setError] = useState(false)
  const imageSrc = src || (name && name.startsWith('/') ? name : undefined)

  if (imageSrc && !error) {
    return (
      <div className={`image-slot image-slot--media image-slot--${index % 4} ${dark ? 'image-slot--dark' : ''} ${className}`}>
        <img
          src={imageSrc}
          alt={alt || name || 'Portfolio visual'}
          className="image-slot__img"
          style={{ objectFit }}
          onError={() => setError(true)}
          loading="lazy"
        />
        {name && !name.startsWith('/') && <div className="slot-label"><span />{name}</div>}
      </div>
    )
  }

  return (
    <div className={`image-slot image-slot--${index % 4} ${dark ? 'image-slot--dark' : ''} ${className}`} aria-label={`Visual: ${name || 'Portfolio visual'}`}>
      <div className="slot-grid" />
      <div className="slot-orbit slot-orbit--one" />
      <div className="slot-orbit slot-orbit--two" />
      <span className="slot-cross slot-cross--a">+</span>
      <span className="slot-cross slot-cross--b">+</span>
      <div className="slot-label"><span />{name || 'IMAGE'}</div>
      <div className="slot-mark">{index === 0 ? 'A' : index === 1 ? 'M' : index === 2 ? 'H' : 'AM'}</div>
    </div>
  )
}

export function Metric({ value, label, light = false, accent = false }: { value: string; label: string; light?: boolean; accent?: boolean }) {
  return (
    <div className={`metric ${light ? 'metric--light' : ''} ${accent ? 'metric--accent' : ''}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

export function ArrowLink({ children, href = '#', light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  return <a href={href} className={`arrow-link ${light ? 'arrow-link--light' : ''}`}>{children}<ArrowUpRight size={16} strokeWidth={1.8} /></a>
}

export function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`pill ${dark ? 'pill--dark' : ''}`}>{children}</span>
}

export function CountUp({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const [shown, setShown] = useState('0')
  useEffect(() => {
    if (!inView) return
    const match = value.match(/^(\d+)/)
    if (!match) { setShown(value); return }
    const target = Number(match[1])
    const suffix = value.slice(match[1].length)
    let current = 0
    const start = window.setTimeout(() => {
      const timer = window.setInterval(() => {
        current += Math.max(1, Math.ceil(target / 24))
        if (current >= target) { current = target; window.clearInterval(timer) }
        setShown(`${current}${suffix}`)
      }, 38)
    }, delay * 1000)
    return () => window.clearTimeout(start)
  }, [inView, value, delay])
  return <div ref={ref} className="count-up"><strong>{shown}</strong><span>{label}</span></div>
}

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  return (
    <div
      className={`tilt-card ${className}`}
      style={{ transform: `perspective(900px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        setRotation({ x: -y * 4, y: x * 4 })
      }}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >{children}</div>
  )
}

export function Globe() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  return (
    <div className="globe-wrap" onMouseMove={(event) => {
      const rect = event.currentTarget.getBoundingClientRect()
      setPointer({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 8, y: ((event.clientY - rect.top) / rect.height - 0.5) * -8 })
    }} onMouseLeave={() => setPointer({ x: 0, y: 0 })}>
      <motion.div className="globe-ambient" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 46, ease: 'linear' }} />
      <motion.div className="globe" animate={{ rotateX: pointer.y, rotateY: pointer.x }} transition={{ duration: 0.6, ease }}>
        <div className="globe-ring globe-ring--one" />
        <div className="globe-ring globe-ring--two" />
        <svg className="globe-map" viewBox="0 0 520 520" role="img" aria-label="Abstract interactive globe with flight routes">
          <defs>
            <clipPath id="globeClip"><circle cx="260" cy="260" r="194" /></clipPath>
            <filter id="softGlow"><feGaussianBlur stdDeviation="2.6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          <circle cx="260" cy="260" r="194" fill="#0b1d33" stroke="#f5f1e8" strokeOpacity=".24" strokeWidth="1.5" />
          <g clipPath="url(#globeClip)" fill="none" stroke="#f5f1e8" strokeOpacity=".1" strokeWidth="1">
            <ellipse cx="260" cy="260" rx="78" ry="194" /><ellipse cx="260" cy="260" rx="146" ry="194" />
            <ellipse cx="260" cy="260" rx="194" ry="62" /><ellipse cx="260" cy="260" rx="194" ry="124" />
            <path d="M66 260h388M82 188h356M82 332h356" />
          </g>
          <g clipPath="url(#globeClip)" fill="#f5f1e8" fillOpacity=".82">
            <path d="M132 144l26-22 30 7 15 25 36 12 9 29-27 18-9 31-34 14-26-18-11-36-24-17z" />
            <path d="M241 139l33-21 39 15 8 23 31 11 28 40-23 19-16 31-27 4-17-29-27-8-7-38-24-17z" />
            <path d="M310 296l25-9 29 19-2 26-22 17-9 39-21 28-18-21 8-37-14-25z" />
            <path d="M184 290l25 8 15 29-11 24 8 28-19 39-21-24 3-34-20-20z" />
            <path d="M391 205l32 17 14 28-21 15-30-13-16-24z" />
          </g>
          <g clipPath="url(#globeClip)" stroke="#b82036" strokeWidth="1.5" fill="none" opacity=".9">
            <path d="M132 194C188 96 284 114 355 218S429 352 373 367" strokeDasharray="4 8" />
            <path d="M162 330C226 252 293 216 390 176" strokeDasharray="3 7" opacity=".8" />
          </g>
          <g filter="url(#softGlow)">
            <g className="map-pin map-pin--one"><circle cx="163" cy="194" r="5" fill="#b82036" /><circle cx="163" cy="194" r="10" fill="none" stroke="#b82036" strokeOpacity=".5" /></g>
            <g className="map-pin map-pin--two"><circle cx="355" cy="218" r="5" fill="#b82036" /><circle cx="355" cy="218" r="10" fill="none" stroke="#b82036" strokeOpacity=".5" /></g>
            <g className="map-pin map-pin--three"><circle cx="373" cy="367" r="5" fill="#b82036" /><circle cx="373" cy="367" r="10" fill="none" stroke="#b82036" strokeOpacity=".5" /></g>
          </g>
          <motion.g animate={{ x: [0, 31, 66, 91], y: [0, -38, 3, 46] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}>
            <path d="M163 194c45-78 120-72 192 24" fill="none" stroke="#b82036" strokeOpacity=".18" strokeWidth="8" />
            <foreignObject x="190" y="132" width="34" height="34"><Plane size={25} color="#f5f1e8" strokeWidth={1.2} /></foreignObject>
          </motion.g>
        </svg>
        <div className="globe-shine" />
      </motion.div>
      <div className="globe-coord globe-coord--top">28.6139° N / 77.2090° E</div>
      <div className="globe-coord globe-coord--bottom"><MapPin size={13} /> DEL / 2026</div>
      <span className="globe-cross globe-cross--one">+</span><span className="globe-cross globe-cross--two">+</span>
    </div>
  )
}
