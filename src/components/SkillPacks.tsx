import { Reveal } from '@/components/Reveal'
import { buttonVariants } from '@/components/ui/button'
import { RazorpayButton } from '@/components/RazorpayButton'

const LIVE_PACKS = [
  {
    emoji: '🏡',
    name: 'Airbnb & Short-Term Rental',
    headline: 'More bookings. Higher ratings. Less host stress.',
    skills: ['Listing Optimiser', 'Guest Message Automator', 'Review Chaser', 'Pricing Intelligence'],
  },
  {
    emoji: '🧠',
    name: 'AI Research & Intelligence',
    headline: 'Stay 3 steps ahead of your market — automatically.',
    skills: ['Market Intel Scout', 'Sleep Researcher', 'Topic to Report', 'Research Brainstormer'],
  },
  {
    emoji: '💪',
    name: 'Fitness App',
    headline: 'Built for fitness app founders who want to scale.',
    skills: ['User Onboarding Comms', 'Retention Sequences', 'Content Generation', 'Review Prompts'],
  },
  {
    emoji: '🤝',
    name: 'Sales & Outreach',
    headline: 'Revenue-generating AI that works while you sleep.',
    skills: ['Cold Outreach Writer', 'AR Chaser', 'Churn Fighter', 'PR Engine'],
  },
]

const PRICING: {
  name: string
  price: string
  type: string
  body: string
  buttonId?: string
}[] = [
  {
    name: 'Starter',
    price: '£297',
    type: 'one-off',
    body: '2 core skills, 1-hour setup session.',
  },
  {
    name: 'Business',
    price: '£597',
    type: 'one-off',
    body: 'All 4 skills, 2-hour setup + training.',
  },
  {
    name: 'Managed',
    price: '£350',
    type: '/month',
    body: 'Fully managed, weekly outputs delivered.',
  },
]

export function SkillPacks() {
  return (
    <section id="packs" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">AI skill packs</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          AI skills for every business. Set up in a day.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I install and configure Claude AI skill packs — automation bundles built for how a specific
          industry actually runs. 187 skills. 20+ industry packs. Four live today.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {LIVE_PACKS.map((pack, i) => (
          <Reveal key={pack.name} delayMs={i * 80}>
            <div className="glass-card h-full p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {pack.emoji}
                  </span>
                  <h3 className="font-display text-2xl">{pack.name}</h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{pack.headline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pack.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <p className="text-sm text-muted-foreground">
          Plus 16 more industry packs in development — hospitality, trades, health &amp; fitness,
          professional services, retail and creative.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {PRICING.map((tier) => (
            <div key={tier.name} className="liquid-glass rounded-2xl p-5">
              <div className="flex items-baseline justify-between">
                <h4 className="font-display text-xl">{tier.name}</h4>
                <span className="text-sm text-foreground">
                  {tier.price}
                  <span className="text-muted-foreground">{tier.type}</span>
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{tier.body}</p>
              <div className="mt-4">
                <RazorpayButton
                  buttonId={tier.buttonId}
                  fallbackHref={`mailto:kiran.shashi47.sk@gmail.com?subject=${encodeURIComponent(
                    `AI Skill Pack — ${tier.name} (${tier.price}${tier.type === '/month' ? '/mo' : ''})`
                  )}`}
                  fallbackLabel={`Get ${tier.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="mailto:kiran.shashi47.sk@gmail.com?subject=AI%20Skill%20Pack%20Demo"
          className={buttonVariants({ variant: 'glass', size: 'hero' })}
        >
          Book a free demo ↗
        </a>
      </Reveal>
    </section>
  )
}
