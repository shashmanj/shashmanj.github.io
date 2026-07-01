import { Reveal } from '@/components/Reveal'

const PARAGRAPHS = [
  "As a Brand Ambassador at Costco in Manchester, I talk to hundreds of older, chronically-ill shoppers every week. I kept hearing the same thing: a diagnosis, a leaflet, and no real idea what to put in the trolley that night — especially once you factor in their culture, their religion, and the other conditions they're already managing.",
  'I build with Claude — Claude Code, agentic workflows, real production engineering. No team. No waiting on anyone else.',
  'BodySense AI: live on TestFlight. The Victorian Grand: live and taking bookings. I build products that earn — then I build the next one.',
]

export function Story() {
  return (
    <section id="story" className="relative mx-auto max-w-3xl px-6 py-28 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">My story</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          It started on the shop floor.
        </h2>
      </Reveal>

      <div className="mt-8 space-y-6">
        {PARAGRAPHS.map((paragraph, i) => (
          <Reveal key={i} delayMs={i * 80}>
            <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
