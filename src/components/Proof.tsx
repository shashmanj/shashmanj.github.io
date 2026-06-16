import { Reveal } from '@/components/Reveal'
import { Counter } from '@/components/Counter'
import { cn } from '@/lib/utils'

const METRICS = [
  { to: 81, suffix: '', label: 'conditions covered' },
  { to: 6, suffix: '', label: 'cultural frameworks' },
  { to: 49, suffix: '+', label: 'AI-paired commits' },
  { to: 2, suffix: '', label: 'Anthropic certs' },
]

const REPOS = [
  { name: 'bodysense-ai', lang: 'Swift', isPrivate: true },
  { name: 'health-sense-ai', lang: 'JavaScript', isPrivate: true },
  { name: 'Body-Sense-AI', lang: 'JavaScript', isPrivate: true },
  { name: 'ios-', lang: 'Swift', isPrivate: false },
]

const CERTS = [
  {
    title: 'Claude 101',
    org: 'Anthropic · May 2026',
    href: '/certificates/shashi-claude101-certificate.pdf',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    org: 'Anthropic · 2026',
    href: '/certificates/shashi-ai-fluency-certificate.pdf',
  },
]

const TOOLS = ['Swift', 'SwiftUI', 'Xcode', 'Claude Code', 'Railway', 'NHS NICE / BNF', 'TestFlight']

export function Proof() {
  return (
    <section id="proof" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Proof of work</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          Built solo. Shipped with AI.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          BodySense AI is a production SwiftUI app I designed, built and shipped on my own — pairing
          with Claude through Claude Code across 49+ commits, a maintained{' '}
          <span className="font-mono text-foreground/90">CLAUDE.md</span> engineering spec, and a
          co-authored git history. Not a prototype: a real, multi-screen iOS app grounded in NHS
          clinical guidance.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="glass-card p-6 text-center">
              <div className="font-display text-5xl tracking-tight">
                <Counter to={metric.to} suffix={metric.suffix} />
              </div>
              <div className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">On GitHub</h3>
              <a
                href="https://github.com/shashmanj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                @shashmanj ↗
              </a>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Product code is private (pre-launch handling of health data) — happy to walk through it
              on request.
            </p>
            <ul className="mt-5 space-y-2.5">
              {REPOS.map((repo) => (
                <li
                  key={repo.name}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5"
                >
                  <span className="font-mono text-sm text-foreground">{repo.name}</span>
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    {repo.lang}
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5',
                        repo.isPrivate
                          ? 'bg-white/5 text-muted-foreground'
                          : 'bg-emerald-400/15 text-emerald-300'
                      )}
                    >
                      {repo.isPrivate ? 'Private' : 'Public'}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="glass-card h-full p-7">
            <h3 className="font-display text-2xl">AI fluency, certified</h3>
            <div className="mt-5 space-y-3">
              {CERTS.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="block text-sm font-medium text-foreground">{cert.title}</span>
                    <span className="block text-xs text-muted-foreground">{cert.org}</span>
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">View ↗</span>
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
