import { useEffect, useRef } from 'react'
import { buttonVariants } from '@/components/ui/button'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      video.removeAttribute('autoplay')
      video.pause()
    }
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ backgroundColor: 'hsl(201 100% 13%)' }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* subtle navy wash for legibility + a clean blend into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/25 to-background"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-40 pt-32 text-center">
        <p className="animate-fade-rise text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Founder · BodySense AI · Manchester
        </p>

        <h1 className="animate-fade-rise mt-6 font-display text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl">
          Healthcare that reaches the{' '}
          <em className="not-italic text-muted-foreground">kitchen table.</em>
        </h1>

        <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm Shashi — I build and ship real products with Claude. BodySense AI is the first UK app
          combining NICE-grounded AI, cultural &amp; religious diet adaptation, and multi-condition
          care — built and shipped solo.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://bodysenseai.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'glass', size: 'hero' })}
          >
            See BodySense AI ↗
          </a>
          <a href="#story" className={buttonVariants({ variant: 'ghost', size: 'hero' })}>
            Read my story
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground/70"
      >
        Scroll
      </div>
    </section>
  )
}
