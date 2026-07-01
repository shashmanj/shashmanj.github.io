import { Reveal } from '@/components/Reveal'
import { buttonVariants } from '@/components/ui/button'
import { RazorpayButton } from '@/components/RazorpayButton'

const TIERS: {
  name: string
  price: string
  body: string
  buttonId?: string
}[] = [
  {
    name: 'Basic Static',
    price: '£400',
    body: 'A clean, fast static website.',
  },
  {
    name: 'Custom + Reviews',
    price: '£800',
    body: 'Custom-built site with reviews integrated.',
  },
  {
    name: 'Payments + Location',
    price: '£1,500',
    body: 'Everything above, plus payments and location / maps.',
  },
  {
    name: 'Full Build, 3D',
    price: '£2,400',
    body: 'Everything above, plus WhatsApp, Calendly bookings, and a full 3D / cinematic build.',
  },
]

const ANALYTICS_BUTTON_ID: string | undefined = undefined

export function WebsiteDesign() {
  return (
    <section id="web-design" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Website design</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-1px] md:text-6xl">
          From a simple site to a full 3D experience.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I design and build websites end-to-end — from a clean static site to a full custom build
          with payments, bookings, and cinematic 3D motion. Pick a tier, or tell me what you need.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.name} delayMs={i * 80}>
            <div className="glass-card flex h-full flex-col p-6">
              <h3 className="font-display text-xl">{tier.name}</h3>
              <p className="mt-2 font-display text-3xl tracking-tight">{tier.price}</p>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                {tier.body}
              </p>
              <div className="mt-4">
                <RazorpayButton
                  buttonId={tier.buttonId}
                  fallbackHref={`mailto:kiran.shashi47.sk@gmail.com?subject=${encodeURIComponent(
                    `Website Design — ${tier.name} (${tier.price})`
                  )}`}
                  fallbackLabel={`Get ${tier.name}`}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="liquid-glass flex flex-col items-start justify-between gap-3 rounded-2xl p-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="font-display text-xl">Analytics &amp; Reporting</h4>
            <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
              Ongoing analytics monitoring and reporting — on top of any tier.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <p className="font-display text-2xl tracking-tight">
              £700<span className="text-base text-muted-foreground">/month</span>
            </p>
            <RazorpayButton
              buttonId={ANALYTICS_BUTTON_ID}
              fallbackHref="mailto:kiran.shashi47.sk@gmail.com?subject=Website%20Design%20%E2%80%94%20Analytics%20%26%20Reporting%20(%C2%A3700%2Fmo)"
              fallbackLabel="Get Analytics"
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <p className="text-sm text-muted-foreground">
          Hosting &amp; domain (e.g. GoDaddy) priced separately at every tier.
        </p>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="mailto:kiran.shashi47.sk@gmail.com?subject=Website%20Design%20Quote"
          className={buttonVariants({ variant: 'glass', size: 'hero' })}
        >
          Get a quote ↗
        </a>
      </Reveal>
    </section>
  )
}
