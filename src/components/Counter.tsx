import { useEffect, useRef, useState } from 'react'

type CounterProps = {
  to: number
  prefix?: string
  suffix?: string
  durationMs?: number
}

/** Counts up from 0 to `to` the first time it scrolls into view. */
export function Counter({ to, prefix = '', suffix = '', durationMs = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const step = (now: number) => {
              const p = Math.min(1, (now - start) / durationMs)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(eased * to))
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [to, durationMs])

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
