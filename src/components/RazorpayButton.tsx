import { useEffect, useRef } from 'react'
import { buttonVariants } from '@/components/ui/button'

type RazorpayButtonProps = {
  /** Razorpay Payment Button ID (e.g. "pl_XXXXXXXXXXXXX"). Leave unset to fall back to a plain link. */
  buttonId?: string
  fallbackHref: string
  fallbackLabel: string
}

/**
 * Renders a Razorpay-hosted Payment Button when `buttonId` is set, or a plain
 * fallback link (e.g. mailto) when it isn't — so tiers work today and can be
 * flipped to real checkout one at a time as button IDs are created.
 */
export function RazorpayButton({ buttonId, fallbackHref, fallbackLabel }: RazorpayButtonProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!buttonId) return
    const form = formRef.current
    if (!form) return
    form.innerHTML = ''
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js'
    script.dataset.payment_button_id = buttonId
    script.async = true
    form.appendChild(script)
  }, [buttonId])

  if (!buttonId) {
    return (
      <a
        href={fallbackHref}
        target={fallbackHref.startsWith('mailto:') ? undefined : '_blank'}
        rel={fallbackHref.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className={buttonVariants({ variant: 'glass', size: 'pill' })}
      >
        {fallbackLabel}
      </a>
    )
  }

  return <form ref={formRef} />
}
