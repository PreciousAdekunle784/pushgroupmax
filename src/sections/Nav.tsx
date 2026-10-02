import { useEffect, useState } from 'react'
import CTAButton from '../components/CTAButton'

interface NavProps {
  onStartQualification: () => void
}

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-[0.65rem]">
      <span className="grid h-[2.15rem] w-[2.15rem] place-items-center rounded-[4px] bg-terra font-serif text-[1.2rem] font-semibold leading-none text-paper">
        P
      </span>
      <span
        className={`text-[0.92rem] font-semibold uppercase leading-[1.15] tracking-[0.14em] ${
          dark ? 'text-ink' : 'text-paper'
        }`}
      >
        Push Group
        <small
          className={`block text-[0.58rem] font-medium tracking-[0.3em] ${
            dark ? 'text-ink-soft' : 'text-paper/60'
          }`}
        >
          MAX
        </small>
      </span>
    </span>
  )
}

export default function Nav({ onStartQualification }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-brand ${
        scrolled ? 'bg-paper/95 shadow-[0_1px_0_rgba(34,27,20,0.14)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4 py-[1.1rem]">
        <a href="#top" aria-label="Push Group Max — back to top" className="no-underline">
          <Wordmark dark={scrolled} />
        </a>
        <CTAButton
          variant={scrolled ? 'primary' : 'light'}
          onClick={onStartQualification}
          className="!px-[1.4rem] !py-[0.7rem] !text-[0.85rem]"
          ariaLabel="See if Push Group Max is right for you — answer 4 quick questions"
        >
          See if it’s right for you
        </CTAButton>
      </div>
    </header>
  )
}
