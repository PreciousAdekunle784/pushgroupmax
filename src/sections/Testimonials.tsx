/**
 * TESTIMONIALS — PLACEHOLDER STATE.
 * No real Push Group Max customer testimonials (written or video) were
 * verifiable at build time, so every slot below is an explicit placeholder.
 * Replace each with a genuine, attributable customer story before launch.
 * Do NOT invent names, results, or metrics.
 */

const writtenSlots = Array.from({ length: 6 }, (_, i) => i)
const videoSlots = Array.from({ length: 3 }, (_, i) => i)

export default function Testimonials() {
  return (
    <section id="stories" className="bg-paper-deep py-[clamp(4.5rem,10vh,8rem)]">
      <div className="wrap">
        <div className="mx-auto mb-[3.2rem] max-w-[46rem] text-center">
          <p className="eyebrow eyebrow-center rv">04 · Proof</p>
          <h2 className="rv rv-d1 h-serif mb-[1rem] text-[clamp(2.1rem,4.4vw,3.6rem)]">
            Business owners who stopped waiting — and started{' '}
            <em className="font-normal italic text-terra">pushing.</em>
          </h2>
          <p className="rv rv-d2 lede mx-auto">
            Written and video experiences from members of previous Push Group cohorts.
          </p>
        </div>

        {/* Written testimonials — 2 rows of 3 per the wireframe */}
        <div className="grid gap-[1.4rem] sm:grid-cols-2 lg:grid-cols-3">
          {writtenSlots.map((i) => (
            <article
              key={i}
              className={`rv rv-d${i % 3} flex min-h-[15rem] flex-col gap-[1.2rem] rounded-[4px] border-[1.5px] border-greige bg-paper p-[1.7rem]`}
            >
              <div className="h-[1.1rem] font-serif text-[2.6rem] leading-[0.6] text-terra" aria-hidden="true">
                &ldquo;
              </div>
              <div className="grid flex-1 place-items-center rounded-[3px] border-[1.5px] border-dashed border-greige p-[1.4rem] text-center">
                <span className="text-[0.72rem] font-semibold uppercase leading-[1.9] tracking-[0.24em] text-ink-faint">
                  [Placeholder testimonial — replace with real customer testimonial]
                </span>
              </div>
              <div className="flex items-center gap-[0.9rem] border-t border-ink/15 pt-[1.1rem]">
                <span
                  className="grid h-[2.6rem] w-[2.6rem] flex-none place-items-center rounded-full border-[1.5px] border-dashed border-greige bg-paper-deep text-center text-[0.5rem] font-semibold leading-[1.3] tracking-[0.08em] text-ink-faint"
                  aria-hidden="true"
                >
                  [Photo]
                </span>
                <span className="text-[0.72rem] font-semibold uppercase leading-[1.8] tracking-[0.14em] text-ink-faint">
                  [Customer name]
                  <br />
                  [Result / outcome]
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Video testimonials — 3 across per the wireframe */}
        <div className="mt-[1.4rem] grid gap-[1.4rem] sm:grid-cols-2 lg:grid-cols-3">
          {videoSlots.map((i) => (
            <div
              key={i}
              className={`rv rv-d${i} group relative grid aspect-[16/9.5] place-items-center overflow-hidden rounded-[4px] bg-espresso text-center`}
              role="img"
              aria-label="Placeholder for a real Push Group Max video testimonial"
            >
              <div>
                <span className="mx-auto mb-[1rem] grid h-[3.6rem] w-[3.6rem] place-items-center rounded-full border-[1.5px] border-paper/55 transition-all duration-200 ease-brand group-hover:border-terra group-hover:bg-terra">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true" className="ml-[3px]">
                    <path d="M1 1.5v13L13 8 1 1.5z" fill="#F6F1E9" />
                  </svg>
                </span>
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-paper/60">
                  [Real Push Group Max
                  <br />
                  video testimonial]
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="rv mt-[2.4rem] text-center text-[0.85rem] tracking-[0.02em] text-ink-faint">
          Real stories from real members go here — no stock quotes, no borrowed praise.
        </p>
      </div>
    </section>
  )
}
