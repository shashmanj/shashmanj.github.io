import { Reveal } from '@/components/Reveal'

const PROJECTS = [
  {
    name: 'BodySense AI',
    kind: 'Health-tech · iOS app',
    tagline: 'NICE-grounded AI for chronic condition management — built and shipped solo.',
    tags: ['Swift · SwiftUI', 'On-device + cloud AI', 'NHS NICE / BNF'],
    href: 'https://bodysenseai.co.uk',
    cta: 'Visit bodysenseai.co.uk ↗',
    image: null,
    mark: `${import.meta.env.BASE_URL}projects/bodysense-mark.png`,
  },
  {
    name: 'The Victorian Grand',
    kind: 'Hospitality · Booking platform',
    tagline:
      'A magnificent 5-bedroom Victorian home with original period features, luxury marble bathrooms & a private walled garden — Greater Manchester.',
    tags: ['React · Vite', 'Base44', 'Stripe checkout'],
    href: null,
    cta: 'Private build — happy to walk through it',
    image: `${import.meta.env.BASE_URL}projects/victorian-grand-hero.jpg`,
    mark: null,
  },
]

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected work</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          Different domains. Same way of building.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Health-tech grounded in NHS guidance, or a luxury short-let booking site — I scope, design
          and ship real products end-to-end, pairing with AI tools the whole way.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delayMs={i * 100}>
            <div className="glass-card flex h-full flex-col overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.01] sm:h-56">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={project.mark ?? undefined}
                      alt={`${project.name} mark`}
                      loading="lazy"
                      className="h-20 w-20 rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {project.kind}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{project.name}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {project.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground underline-offset-4 hover:underline"
                    >
                      {project.cta}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{project.cta}</span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
