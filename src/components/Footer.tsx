import { Reveal } from '@/components/Reveal'
import { buttonVariants } from '@/components/ui/button'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
      <Reveal>
        <h2 className="font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          Let&apos;s build something that matters.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Founder of BodySense AI, based in Manchester — open to conversations about
          clinically-grounded, culturally-aware health AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://bodysenseai.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'glass', size: 'pill' })}
          >
            bodysenseai.co.uk ↗
          </a>
          <a
            href="https://www.linkedin.com/in/shashi-kiran-manju/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'ghost', size: 'pill' })}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/shashmanj"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'ghost', size: 'pill' })}
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-14 text-xs text-muted-foreground/70">
          © {YEAR} Shashi Kiran Manju · Manchester, UK
        </p>
      </Reveal>
    </footer>
  )
}
