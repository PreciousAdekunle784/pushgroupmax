import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'light'
type Size = 'md' | 'lg'

interface CTAButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  ariaLabel?: string
  arrow?: boolean
}

const base =
  'inline-flex items-center justify-center gap-[0.7rem] font-sans font-semibold tracking-[0.01em] rounded-full border-[1.5px] cursor-pointer whitespace-nowrap transition-all duration-200 ease-brand'

const sizes: Record<Size, string> = {
  md: 'text-[0.95rem] px-[1.9rem] py-[1.05rem]',
  lg: 'text-[1.02rem] px-[2.3rem] py-[1.2rem]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-terra-deep border-terra-deep text-paper hover:bg-terra-dark hover:border-terra-dark',
  ghost: 'bg-transparent border-current text-current hover:bg-ink hover:border-ink hover:text-paper',
  light: 'bg-paper border-paper text-terra-deep hover:bg-white hover:border-white',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  ariaLabel,
  arrow = true,
}: CTAButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-200 ease-brand group-hover:translate-x-[3px]">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${cls} group no-underline`} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={`${cls} group`} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </button>
  )
}
