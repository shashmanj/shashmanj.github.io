import { Reveal } from '@/components/Reveal'

const PARAGRAPHS = [
  'He managed diabetes in India, where the medical knowledge existed but never reached the kitchen table — what to actually cook that night, in our food, around our routines and our faith.',
  'I kept seeing the same gap: in family, and now in the hundreds of older, chronically-ill shoppers I speak with every week as a Brand Ambassador at Costco in Manchester. Two cultures, two health systems, one universal problem.',
  'My background sits right on it — a BSc in Agricultural Science (nutrition, biochemistry), an MSc in Entrepreneurship, and the self-taught engineering to build the product and ship it on iOS myself.',
]

export function Story() {
  return (
    <section id="story" className="relative mx-auto max-w-3xl px-6 py-28 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">My story</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          It started with my father.
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
