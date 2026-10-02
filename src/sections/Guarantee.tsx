import CTAButton from '../components/CTAButton'

interface Props {
  onStartQualification: () => void
}

/**
 * GUARANTEE — PROPOSED CONCEPT ONLY.
 * No official Push Group Max guarantee terms were available at build time.
 * Everything in the dashed box below is a proposal and is visibly marked as
 * such. Confirm real terms with the Push Group Max team before launch.
 */
export default function Guarantee({ onStartQualification }: Props) {
  return (
    <section id="guarantee" className="bg-espresso py-[clamp(4.5rem,10vh,8rem)] text-paper">
      <div className="wrap mx-auto max-w-[46rem] text-center">
        <div
          className="rv mx-auto mb-[1.8rem] grid h-[4.6rem] w-[4.6rem] place-items-center rounded-full border-[1.5px] border-camel font-serif text-[1.5rem] italic text-camel"
          aria-hidden="true"
        >
          Pg
        </div>
        <p className="eyebrow eyebrow-center rv text-camel">05 · Our promise</p>
        <h2 className="rv rv-d1 h-serif mb-[1.6rem] text-[clamp(2.1rem,4.4vw,3.6rem)] text-paper">
          Make this decision with <em className="font-normal italic text-camel">confidence.</em>
        </h2>
        <p className="rv rv-d2 mx-auto mb-[1.2rem] max-w-[38em] text-paper/80">
          Joining an 8-week commitment is a real decision — of money, time, and trust. We believe the risk should sit on
          our side of the table, not yours.
        </p>

        <div className="rv rv-d2 mx-auto my-[2.2rem] max-w-[40rem] rounded-[4px] border-[1.5px] border-dashed border-paper/20 px-[2rem] py-[1.8rem] text-center">
          <span className="text-[0.78rem] font-semibold uppercase leading-[2] tracking-[0.26em] text-camel">
            [Proposed guarantee — confirm before launch]
          </span>
          <p className="mt-[0.6rem] font-serif text-[clamp(1.15rem,2vw,1.45rem)] italic leading-[1.4] text-paper">
            “The Two-Week Push Test”
          </p>
          <p className="mx-auto mt-[0.6rem] max-w-[32em] text-[0.95rem] leading-[1.7] text-paper/70">
            Join the cohort, show up, and do the work for the first two weeks. If by the end of week two you honestly
            feel Push Group Max isn’t what we promised, tell us — and we’ll refund your seat in full.
          </p>
          <p className="mx-auto mt-[0.9rem] max-w-[32em] text-[0.85rem] leading-[1.7] text-paper/50">
            What it covers: your full seat payment within the first two weeks. What it doesn’t: results — those depend
            on the work you put in. Exact terms to be confirmed by the Push Group Max team before this page goes live.
          </p>
        </div>

        <CTAButton
          variant="primary"
          size="lg"
          onClick={onStartQualification}
          className="rv rv-d3"
          ariaLabel="See if Push Group Max is right for you — answer 4 quick questions"
        >
          See if it’s right for you
        </CTAButton>
        <p className="rv rv-d3 mt-4 text-[0.85rem] text-paper/60">
          4 quick questions — nothing to pay on this page.
        </p>
      </div>
    </section>
  )
}
