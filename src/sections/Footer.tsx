import { Wordmark } from './Nav'

const links = [
  { href: '#whats-in-it', label: 'What’s inside' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#transformation', label: 'The shift' },
  { href: '#stories', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso py-[3rem] pb-[2.4rem] text-paper/60">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-[1.4rem] max-sm:justify-center max-sm:text-center">
          <a href="#top" aria-label="Push Group Max — back to top" className="no-underline">
            <Wordmark />
          </a>
          <nav className="flex flex-wrap gap-[1.8rem] max-sm:justify-center" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border-b border-transparent text-[0.82rem] font-medium uppercase tracking-[0.1em] no-underline transition-all duration-200 ease-brand hover:border-camel hover:text-camel"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-[2.2rem] flex flex-wrap justify-between gap-[0.8rem] border-t border-paper/15 pt-[1.6rem] text-[0.8rem] text-paper/40 max-sm:justify-center max-sm:text-center">
          <span>Push Group Max — a Jacbellmedia Business School program</span>
          <span>© 2026 Jacbellmedia Business School. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
