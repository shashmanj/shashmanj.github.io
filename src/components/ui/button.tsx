import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
        glass: 'liquid-glass text-foreground hover:scale-[1.03]',
        ghost: 'rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5',
        link: 'text-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 rounded-md px-5 py-2.5 text-sm',
        pill: 'rounded-full px-6 py-2.5 text-sm',
        hero: 'rounded-full px-12 py-5 text-base sm:px-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
