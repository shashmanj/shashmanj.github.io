import { Reveal } from '@/components/Reveal'

const PILLARS = [
  {
    title: 'NICE-grounded hybrid AI',
    body: 'Private, on-device answers for everyday questions; complex clinical reasoning grounded in NHS NICE guidelines and the BNF.',
  },
  {
    title: 'Culturally & religiously aware',
    body: 'Six dietary frameworks — Halal, Kosher, Hindu Vegetarian, Jain, Buddhist, Sattvic — with full UK allergen handling.',
  },
  {
    title: 'Multi-condition care',
    body: 'Manages several conditions at once across 81 conditions — built for the real multi-morbidity of UK patients.',
  },
  {
    title: 'A free tier with real clinical value',
    body: 'Genuinely useful for the working-class, ethnic-minority and over-45 patients the NHS names as worst-served.',
  },
]

const STACK = ['iOS · Swift', 'Hybrid on-device + cloud AI', 'Railway backend', 'NHS NICE', 'BNF']

export function Product() {
  return (
    <section id="product" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The product</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          BodySense AI
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The first UK app combining NICE-grounded hybrid AI, cultural &amp; religious diet
          adaptation, and multi-condition care — live on iOS TestFlight today.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delayMs={i * 80}>
            <div className="glass-card h-full p-7 transition-transform duration-500 hover:-translate-y-1">
              <h3 className="font-display text-2xl tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live on iOS TestFlight
          </span>
          {STACK.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
          <a
            href="https://bodysenseai.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1.5 py-1.5 text-xs text-foreground underline-offset-4 hover:underline"
          >
            bodysenseai.co.uk ↗
          </a>
        </div>
      </Reveal>
    </section>
  )
}
