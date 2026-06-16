import { Reveal } from '@/components/Reveal'

const AREAS = [
  {
    title: 'Product & venture',
    body: 'Venture creation, financial modelling, customer development, IP & go-to-market.',
  },
  {
    title: 'Engineering',
    body: 'iOS / Swift (SwiftUI, Xcode), AI integration & agentic tools, cloud backend on Railway.',
  },
  {
    title: 'Health & people',
    body: 'Nutrition & food systems (BSc), NICE / BNF grounding, two years of customer research.',
  },
]

export function Background() {
  return (
    <section id="background" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Background</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          What I bring
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {AREAS.map((area, i) => (
          <Reveal key={area.title} delayMs={i * 80}>
            <div className="glass-card h-full p-7">
              <h3 className="font-display text-2xl">{area.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{area.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <p className="text-sm text-muted-foreground">
          MSc Entrepreneurship, Manchester Metropolitan University · BSc Agricultural Science · Apple
          Developer Program member
        </p>
      </Reveal>
    </section>
  )
}
