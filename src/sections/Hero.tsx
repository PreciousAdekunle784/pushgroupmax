import CTAButton from '../components/CTAButton'
import { COHORT_DATE_LABEL, daysUntilCohort } from '../lib/funnel'

interface HeroProps {
  onStartQualification: () => void
}

export default function Hero({ onStartQualification }: HeroProps) {
  const daysLeft = daysUntilCohort()

  return (
    <section id="top" className="relative overflow-hidden bg-espresso text-paper">
      {/* Ambient background: subtle AI-generated studio video, with the real
          founder photo as poster/fallback where video can't play. */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/founder-hero.jpg"
        >
          <source src="/media/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/35" />
      </div>

      <div className="wrap relative grid items-center gap-[clamp(2.5rem,5vw,5.5rem)] pb-[clamp(4.5rem,9vh,7rem)] pt-[clamp(7.5rem,14vh,10rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Founder image (per wireframe: founder image on the left) */}
        <figure className="rv relative order-2 mx-auto w-full max-w-[30rem] lg:order-1">
          <div className="relative overflow-hidden rounded-[4px] shadow-[0_0_0_1px_rgba(246,241,233,0.18)]">
            <img
              src="/media/founder-alt.jpg"
              alt="Joy Akosa, founder of Jacbellmedia Business School, at her desk ready to work with Push Group Max members"
              width={1024}
              height={683}
              fetchPriority="high"
              className="hero-img-in aspect-[4/3.4] w-full object-cover object-[50%_30%] lg:aspect-[4/4.4]"
            />
          </div>
          <div
            className="pointer-events-none absolute -inset-[14px] -z-10 rounded-[4px] border-[1.5px] border-camel/55"
            aria-hidden="true"
          />
          <figcaption className="mt-[1.1rem] flex items-baseline gap-[0.7rem] text-[0.8rem] tracking-[0.02em] text-paper/70 before:h-px before:w-[1.6rem] before:flex-none before:self-center before:bg-camel">
            <strong className="whitespace-nowrap font-semibold text-paper">Joy Akosa</strong> — Founder, Jacbellmedia
            Business School
          </figcaption>
        </figure>

        {/* Headline block */}
        <div className="order-1 lg:order-2">
          <span className="rv mb-[1.8rem] inline-flex items-center gap-[0.6rem] rounded-full border border-paper/25 px-[1.1rem] py-[0.5rem] text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-paper/85">
            <span className="h-[0.45rem] w-[0.45rem] flex-none rounded-full bg-terra" aria-hidden="true" />
            An 8-week business-building experience
          </span>

          <h1 className="rv rv-d1 h-serif mb-[1.6rem] max-w-[11em] text-[clamp(2.7rem,6vw,5rem)] text-paper">
            You don’t need more information. You need eight weeks of{' '}
            <em className="font-normal italic text-camel">doing.</em>
          </h1>

          <p className="rv rv-d2 lede mb-[2.4rem] !text-paper/80">
            Push Group Max is for business owners who are done collecting strategies — and ready to put them to work on
            your marketing, your sales, your offer, and your numbers. Learn it. Implement it. Sell it. Grow it.
          </p>

          <div className="rv rv-d3 mb-[1.6rem] flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-stretch">
            <CTAButton
              variant="primary"
              size="lg"
              onClick={onStartQualification}
              className="max-sm:w-full"
              ariaLabel="See if Push Group Max is right for you — answer 4 quick questions"
            >
              See if Push Group Max is right for you
            </CTAButton>
            <CTAButton
              variant="ghost"
              size="lg"
              href="#whats-in-it"
              arrow={false}
              className="border-paper/60 text-paper hover:!bg-paper hover:!text-ink max-sm:w-full"
            >
              See what’s inside
            </CTAButton>
          </div>

          <div className="rv rv-d3 flex flex-wrap gap-x-[1.6rem] gap-y-2 text-[0.85rem] text-paper/65">
            <span className="inline-flex items-center gap-[0.55rem]">
              <i className="h-[5px] w-[5px] flex-none rounded-full bg-camel" aria-hidden="true" />4 quick questions —
              nothing to pay on this page
            </span>
            <span className="inline-flex items-center gap-[0.55rem]">
              <i className="h-[5px] w-[5px] flex-none rounded-full bg-camel" aria-hidden="true" />
              Cohort begins {COHORT_DATE_LABEL}
              {daysLeft > 0 && ` — ${daysLeft} days away`}
            </span>
            <span className="inline-flex items-center gap-[0.55rem]">
              <i className="h-[5px] w-[5px] flex-none rounded-full bg-camel" aria-hidden="true" />
              Real implementation, not another course
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
