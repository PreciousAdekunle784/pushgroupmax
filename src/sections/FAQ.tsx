import { useState } from 'react'
import { COHORT_DATE_LABEL } from '../lib/funnel'

interface Faq {
  q: string
  a: React.ReactNode
}

const Add = () => <span className="font-semibold tracking-[0.04em] text-camel">[Add answer]</span>

/**
 * FAQ — answers are grounded in the official Push Group Max messaging.
 * Items marked [Add answer] need a confirmed detail from the team; they are
 * intentionally honest placeholders rather than invented policy.
 * No price appears here by design — pricing belongs later in the funnel.
 */
const faqs: Faq[] = [
  {
    q: 'What exactly is Push Group Max?',
    a: 'An 8-week business-building experience from Jacbellmedia Business School. It’s built around implementation — not information. You work on your marketing, your sales, your offer, your systems, and your numbers, with structure and accountability to keep you executing every week.',
  },
  {
    q: 'Who is it for?',
    a: 'Business owners who already know what they should be doing — more marketing, more selling, a clearer offer, better systems — but aren’t doing it consistently. If you’re tired of ideas without execution, this was built for you.',
  },
  {
    q: 'What do I actually get when I join?',
    a: (
      <>
        <Add /> — list the exact deliverables once confirmed: weekly sessions, implementation assignments, templates,
        group support, and everything else included in a seat.
      </>
    ),
  },
  {
    q: 'How is this different from another course?',
    a: 'Courses give you more to know. Push Group Max exists because knowing was never the problem — doing is. The whole experience is built around action: less consuming, more implementing, more selling, more doing.',
  },
  {
    q: 'How much time will I need each week?',
    a: (
      <>
        <Add /> — state the expected weekly time commitment so members can plan around work and life.
      </>
    ),
  },
  {
    q: 'What if I’m just starting out?',
    a: (
      <>
        <Add /> — confirm whether Push Group Max suits early-stage founders, established businesses, or both, so
        beginners know exactly where they stand.
      </>
    ),
  },
  {
    q: 'What if I’ve tried other programs and stalled?',
    a: 'That’s exactly who this was built for. Most programs hand you more information and leave execution to you. Push Group Max flips that: the structure, the accountability, and the room exist to make sure the work actually gets done — week after week.',
  },
  {
    q: 'Is there a guarantee?',
    a: 'See the promise section above. The guarantee shown there is a proposed concept — final terms will be confirmed before launch, and you’ll see them before you ever pay.',
  },
  {
    q: 'When does the next cohort begin?',
    a: `The next cohort begins ${COHORT_DATE_LABEL}. Early-bird enrollment is open now — full details, including what’s included and what it costs, are shared after the 4 quick questions, on the next page.`,
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-[clamp(4.5rem,10vh,8rem)]">
      <div className="wrap">
        <p className="eyebrow eyebrow-center rv">06 · Questions</p>
        <h2 className="rv rv-d1 h-serif text-center text-[clamp(2.1rem,4.4vw,3.6rem)]">
          Before you <em className="font-normal italic text-terra">decide.</em>
        </h2>

        <div className="mx-auto mt-[3rem] max-w-[48rem] border-t border-ink/15">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div key={faq.q} className="rv border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-[1.5rem] bg-none px-[0.2rem] py-[1.5rem] text-left font-serif text-[clamp(1.15rem,1.8vw,1.4rem)] font-medium tracking-[-0.01em] text-ink transition-colors duration-200 ease-brand hover:text-terra"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {faq.q}
                    <span
                      className={`relative grid h-[2rem] w-[2rem] flex-none place-items-center rounded-full border-[1.5px] transition-all duration-300 ease-brand ${
                        open ? 'border-terra bg-terra' : 'border-greige'
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`absolute h-[1.5px] w-[0.75rem] transition-colors ${open ? 'bg-paper' : 'bg-ink'}`}
                      />
                      <span
                        className={`absolute h-[0.75rem] w-[1.5px] transition-all duration-300 ease-brand ${
                          open ? 'rotate-90 opacity-0' : 'bg-ink'
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-brand"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-[40em] px-[0.2rem] pb-[1.7rem] text-[0.99rem] leading-[1.7] text-ink-soft">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
