import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'BodySense AI', href: '#product' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled ? 'bg-background/70 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg leading-none tracking-tight text-foreground sm:text-2xl md:text-3xl"
        >
          Shashi Kiran Manju
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className={buttonVariants({ variant: 'glass', size: 'pill' })}>
          Get in touch
        </a>
      </nav>
    </header>
  )
}
