import CTAButton from '../components/CTAButton'

interface Props {
  onStartQualification: () => void
}

const benefits = [
  {
    title: 'An offer people understand — and buy.',
    body: 'You sharpen what you sell until customers get it in seconds, not after a ten-minute explanation. Clearer offer, easier conversations.',
  },
  {
    title: 'Marketing that happens every single week.',
    body: 'Not when you feel inspired. Not when things get quiet. You build a rhythm you can actually keep — so visibility stops depending on your mood.',
  },
  {
    title: 'Selling without the second-guessing.',
    body: 'You follow a simple process instead of improvising every conversation — so more of the people who ask “how much?” become people who pay.',
  },
  {
    title: 'Numbers you actually look at.',
    body: 'You know what’s working, what isn’t, and where the money is going — so decisions come from evidence, not anxiety.',
  },
  {
    title: 'Structure and accountability that keep you moving.',
    body: 'You won’t do this alone. Week after week, you’re pushed to execute — not just to take notes.',
  },
]

const numerals = ['i.', 'ii.', 'iii.', 'iv.', 'v.']

export default function WhatsInItForMe({ onStartQualification }: Props) {
  return (
    <section id="whats-in-it" className="border-t border-ink/15 py-[clamp(4.5rem,10vh,8rem)]">
      <div className="wrap grid items-center gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div>
          <p className="eyebrow rv">01 · What’s in it for you</p>
          <h2 className="rv rv-d1 h-serif text-[clamp(2.1rem,4.4vw,3.6rem)]">
            Eight weeks working <em className="font-normal italic text-terra">on</em> the things that actually grow your
            business.
          </h2>
          <ul className="mb-[2.6rem] mt-[2.2rem] grid gap-[1.4rem]">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className={`rv rv-d${Math.min(i, 3)} grid grid-cols-[auto_1fr] items-start gap-[1.1rem] border-b border-ink/15 pb-[1.4rem] last:border-b-0 last:pb-0`}
              >
                <span className="min-w-[2rem] pt-[0.15rem] font-serif text-[1.05rem] italic text-camel">
                  {numerals[i]}
                </span>
                <div>
                  <strong className="mb-[0.2rem] block text-[1.08rem] font-semibold tracking-[-0.015em]">
                    {b.title}
                  </strong>
                  <p className="text-[0.97rem] leading-[1.55] text-ink-soft">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="rv relative">
          <div className="overflow-hidden rounded-[4px] shadow-[0_0_0_1px_rgba(34,27,20,0.14)]">
            <img
              src="/media/founder-hero.jpg"
              alt="Joy Akosa in a working session with a Push Group Max member, talking through their business"
              width={1600}
              height={1067}
              loading="lazy"
              className="aspect-[4/3.4] w-full object-cover object-[32%_18%] lg:aspect-[4/4.4]"
            />
          </div>
          <figcaption className="absolute bottom-[1rem] left-[0.8rem] rounded-[3px] bg-espresso px-[1.4rem] py-[0.85rem] font-serif text-[1.05rem] italic text-paper shadow-[0_14px_34px_-18px_rgba(29,21,16,0.5)] lg:bottom-[2rem] lg:left-[-1.2rem]">
            <b className="mb-[0.15rem] block font-sans text-[0.7rem] font-semibold not-italic uppercase tracking-[0.2em] text-camel">
              The point
            </b>
            Less consuming. More doing.
          </figcaption>
        </figure>
      </div>

      <div className="wrap rv mt-[3rem] text-center">
        <CTAButton
          variant="primary"
          size="lg"
          onClick={onStartQualification}
          ariaLabel="I'm ready to push — answer 4 quick questions"
        >
          Yes — I’m ready to push
        </CTAButton>
        <p className="mt-4 text-[0.85rem] text-ink-faint">4 quick questions first — then you’ll see the full details.</p>
      </div>
    </section>
  )
}
