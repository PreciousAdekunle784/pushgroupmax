const forYou = [
  'You’re tired of having ideas without execution',
  'You want more customers — and a plan to get them',
  'Your marketing happens in bursts, then goes quiet',
  'You want to sell more without winging every conversation',
  'You know your offer could be clearer',
  'You want to understand your numbers, not avoid them',
  'You’re done doing everything randomly — and alone',
]

const notForYou = [
  'You’re looking for a magic formula',
  'You want someone else to build your business for you',
  'You expect overnight success',
  'You’d rather collect another course you never open',
]

export default function WhyThisIsForMe() {
  return (
    <section id="who" className="bg-paper-deep py-[clamp(4.5rem,10vh,8rem)]">
      <div className="wrap">
        <p className="eyebrow eyebrow-center rv">02 · Why this is for you</p>
        <h2 className="rv rv-d1 h-serif mx-auto max-w-[18em] text-center text-[clamp(2.1rem,4.4vw,3.6rem)]">
          Built for the business owner who’s ready to <em className="font-normal italic text-terra">move.</em>
        </h2>

        <div className="mt-[3rem] grid items-stretch gap-[clamp(1.5rem,3.5vw,3rem)] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          {/* This IS for you */}
          <div className="rv flex flex-col gap-[1.1rem] rounded-[4px] border-[1.5px] border-greige bg-paper p-[clamp(1.8rem,3vw,2.8rem)]">
            <h3 className="h-serif text-[clamp(1.45rem,2.2vw,1.9rem)] leading-[1.08]">
              This is for you <em className="font-normal italic text-terra">if…</em>
            </h3>
            <ul className="grid gap-[0.75rem] text-[0.97rem]">
              {forYou.map((item) => (
                <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-[0.8rem] leading-[1.5]">
                  <span className="font-semibold text-terra" aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div
            className="rv flex flex-row items-center justify-center gap-[0.9rem] px-0 py-[0.4rem] lg:flex-col lg:py-0"
            aria-hidden="true"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-ink-faint lg:[writing-mode:vertical-rl]">
              But not
            </span>
            <span className="relative h-[1.5px] min-h-0 flex-1 bg-gradient-to-r from-camel to-terra lg:h-auto lg:min-h-[4rem] lg:w-[1.5px] lg:bg-gradient-to-b">
              <span className="absolute right-[-1px] top-1/2 -translate-y-1/2 border-y-[5px] border-l-[7px] border-y-transparent border-l-terra lg:bottom-[-1px] lg:left-1/2 lg:right-auto lg:top-auto lg:-translate-x-1/2 lg:translate-y-0 lg:border-x-[5px] lg:border-b-0 lg:border-t-[7px] lg:border-x-transparent lg:border-t-terra lg:border-l-transparent" />
            </span>
          </div>

          {/* This is NOT for you */}
          <div className="rv rv-d1 flex flex-col gap-[1.1rem] rounded-[4px] bg-espresso p-[clamp(1.8rem,3vw,2.8rem)] text-paper">
            <h3 className="h-serif text-[clamp(1.45rem,2.2vw,1.9rem)] leading-[1.08] text-paper">
              This is <em className="font-normal italic text-camel">not</em> for you if…
            </h3>
            <ul className="grid gap-[0.75rem] text-[0.97rem] text-paper/75">
              {notForYou.map((item) => (
                <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-[0.8rem] leading-[1.5]">
                  <span className="font-semibold text-camel" aria-hidden="true">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="rv mt-[2.8rem] text-center font-serif text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.3]">
          But if you’re ready to learn, act, adjust, and keep moving —<br />
          <em className="font-normal italic text-terra">it’s time to push.</em>
        </p>
      </div>
    </section>
  )
}
