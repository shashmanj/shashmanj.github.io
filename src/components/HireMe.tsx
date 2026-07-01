import { Reveal } from '@/components/Reveal'
import { buttonVariants } from '@/components/ui/button'

const OFFERS = [
  {
    title: 'Product builds',
    body: 'MVP to production, solo and fast. iOS / Swift, React / Vite — shipped with Claude Code.',
  },
  {
    title: 'Product strategy',
    body: 'Venture creation, financial modelling, customer development, IP & go-to-market.',
  },
  {
    title: 'AI-native engineering',
    body: 'Claude Code & agentic workflows, brought into your team or your next build.',
  },
]

export function HireMe() {
  return (
    <section id="hire" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Work with me</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          Need it built? I'll build it.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I design, build and ship real products solo, with Claude — BodySense AI and The Victorian
          Grand are both live proof. If you need an MVP shipped, a product validated, or AI-native
          engineering brought into your team, that's exactly what I do.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {OFFERS.map((offer, i) => (
          <Reveal key={offer.title} delayMs={i * 80}>
            <div className="glass-card h-full p-7">
              <h3 className="font-display text-2xl">{offer.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{offer.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="https://www.linkedin.com/in/shashi-kiran-manju/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'glass', size: 'hero' })}
        >
          Work with me on LinkedIn ↗
        </a>
      </Reveal>
    </section>
  )
}
