import CTAButton from '../components/CTAButton'
import { COHORT_DATE_LABEL, daysUntilCohort } from '../lib/funnel'

interface Props {
  onStartQualification: () => void
}

export default function FinalCTA({ onStartQualification }: Props) {
  const daysLeft = daysUntilCohort()

  return (
    <section id="join" className="bg-terra py-[clamp(5rem,12vh,8.5rem)] text-center text-paper">
      <div className="wrap">
        <p className="eyebrow eyebrow-center rv !text-paper/75">The decision</p>
        <h2 className="rv rv-d1 h-serif mx-auto mb-[1.4rem] max-w-[16em] text-[clamp(2.4rem,5.4vw,4.4rem)] text-paper">
          Eight weeks from now, you could still be saving posts. Or you could be{' '}
          <em className="font-normal italic text-espresso">building.</em>
        </h2>
        <p className="rv rv-d2 mx-auto mb-[2.6rem] max-w-[34em] text-[1.08rem] text-paper/85">
          Your next level won’t come from knowing more. It comes from doing more. Answer 4 quick questions, see the full
          Push Group Max offer, and decide if the next cohort is where you belong.
        </p>
        <CTAButton
          variant="light"
          size="lg"
          onClick={onStartQualification}
          className="rv rv-d3"
          ariaLabel="See if Push Group Max is right for you — answer 4 quick questions"
        >
          See if Push Group Max is right for you
        </CTAButton>
        <p className="rv rv-d3 mt-[1.6rem] text-[0.85rem] tracking-[0.04em] text-paper/70">
          4 quick questions · nothing to pay on this page
          {daysLeft > 0 && ` · cohort begins ${COHORT_DATE_LABEL} — ${daysLeft} days away`}
        </p>
      </div>
    </section>
  )
}
