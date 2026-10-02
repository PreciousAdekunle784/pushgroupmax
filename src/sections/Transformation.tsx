import { useEffect, useRef } from 'react'
import CTAButton from '../components/CTAButton'

interface Props {
  onStartQualification: () => void
}

const before = [
  'Ideas pile up — nothing actually ships',
  'Marketing happens in bursts, then silence',
  'Your offer takes too long to explain',
  'Sales conversations feel improvised',
  'You’re guessing at your numbers',
  'Everything depends on you, alone',
]

const after = [
  'Fewer ideas — more finished work',
  'Marketing runs on a rhythm you keep',
  'Your offer is sharp and easy to sell',
  'You follow a sales process that works',
  'Your numbers tell you what’s working',
  'A group that keeps you accountable',
]

export default function Transformation({ onStartQualification }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('draw-in')
            io.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="transformation" className="border-t border-ink/15 py-[clamp(4.5rem,10vh,8rem)]">
      <div className="wrap">
        <div className="mx-auto mb-[3.4rem] max-w-[46rem] text-center">
          <p className="eyebrow eyebrow-center rv">03 · The shift</p>
          <h2 className="rv rv-d1 h-serif mb-[1.1rem] text-[clamp(2.1rem,4.4vw,3.6rem)]">
            In the next 8 weeks, you move from <em className="font-normal italic text-terra">this</em> — to{' '}
            <em className="font-normal italic text-terra">this.</em>
          </h2>
          <p className="rv rv-d2 lede mx-auto">
            Not by learning more. By doing the work, week after week, with structure behind you.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid items-stretch gap-[clamp(1.2rem,3vw,2.4rem)] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
        >
          {/* BEFORE */}
          <div className="rv flex flex-col gap-[1.2rem] rounded-[4px] border-[1.5px] border-dashed border-greige bg-paper-deep p-[clamp(1.8rem,3vw,2.6rem)] text-ink-soft">
            <span className="inline-flex items-center gap-[0.7rem] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-ink-faint after:h-px after:w-[2rem] after:bg-current after:opacity-50">
              Before · Where you are
            </span>
            <h3 className="h-serif text-[clamp(1.4rem,2.1vw,1.8rem)] leading-[1.12] text-ink">
              You know what to do. It’s just not getting done.
            </h3>
            <ul className="grid gap-[0.7rem] text-[0.96rem]">
              {before.map((item) => (
                <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-[0.75rem] leading-[1.5]">
                  <span className="text-ink-faint" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bridge arrow */}
          <div
            className="rv rv-d1 flex min-w-0 flex-row items-center justify-center gap-[0.8rem] px-0 py-[0.4rem] lg:min-w-[5.5rem] lg:flex-col lg:py-0"
            aria-hidden="true"
          >
            <svg
              className="draw h-auto w-[3rem] rotate-90 overflow-visible lg:w-[clamp(3.4rem,6vw,5rem)] lg:rotate-0"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 20 C 25 4, 55 4, 74 18"
                stroke="#C24E2A"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={100}
              />
              <path
                d="M66 10 L 75 19 L 64 24"
                stroke="#C24E2A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                pathLength={100}
              />
            </svg>
            <span className="whitespace-nowrap font-serif text-[1rem] italic text-terra">The Push</span>
          </div>

          {/* AFTER */}
          <div className="rv rv-d2 flex flex-col gap-[1.2rem] rounded-[4px] bg-espresso p-[clamp(1.8rem,3vw,2.6rem)] text-paper">
            <span className="inline-flex items-center gap-[0.7rem] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-camel after:h-px after:w-[2rem] after:bg-current after:opacity-50">
              After · Where you’re going
            </span>
            <h3 className="h-serif text-[clamp(1.4rem,2.1vw,1.8rem)] leading-[1.12] text-paper">
              The right things get done. Every week.
            </h3>
            <ul className="grid gap-[0.7rem] text-[0.96rem] text-paper/80">
              {after.map((item) => (
                <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-[0.75rem] leading-[1.5]">
                  <span className="font-semibold text-terra" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="rv mx-auto mt-[2.6rem] max-w-[38rem] text-center text-[0.95rem] text-ink-soft">
          No magic. No overnight promises. Just eight focused weeks of doing the work — with structure, support, and a
          room that won’t let you stall.
        </p>
        <div className="rv mt-[2.2rem] text-center">
          <CTAButton
            variant="primary"
            size="lg"
            onClick={onStartQualification}
            ariaLabel="Start my 8-week push — answer 4 quick questions"
          >
            Start my 8-week push
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
