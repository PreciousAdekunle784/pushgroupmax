/**
 * Push Group Max — funnel constants and qualification flow definition.
 *
 * Funnel: Landing page → 4 qualification questions → About page → Checkout.
 * The About page URL below is the exact redirect target after Question 4.
 * Do not modify it. The price intentionally appears nowhere in this project.
 */

export const ABOUT_URL = 'https://hubs.nestuge.com/pushgroupmax/about'

export const COHORT_DATE_LABEL = 'January 1, 2027'
export const COHORT_DATE_ISO = '2027-01-01T00:00:00+01:00'

/** Days remaining until the next cohort begins (0 once it has started). */
export function daysUntilCohort(now: Date = new Date()): number {
  const ms = new Date(COHORT_DATE_ISO).getTime() - now.getTime()
  return Math.max(0, Math.ceil(ms / 86_400_000))
}

export interface QualificationOption {
  id: string
  label: string
  hint?: string
}

export interface QualificationQuestion {
  id: string
  question: string
  sub?: string
  options: QualificationOption[]
}

/**
 * Exactly 4 questions, built from the real Push Group Max audience:
 * business owners with ideas but inconsistent execution, who want more
 * customers, clearer offers, better marketing/sales systems, and numbers
 * they understand.
 */
export const QUALIFICATION_QUESTIONS: QualificationQuestion[] = [
  {
    id: 'current-stage',
    question: 'Which best describes your business right now?',
    sub: 'Pick the one that sounds most like you.',
    options: [
      { id: 'idea', label: 'I have an idea — but I haven’t really launched' },
      { id: 'inconsistent', label: 'I’m in business, but sales are inconsistent' },
      { id: 'no-systems', label: 'I get sales, but there are no real systems behind them' },
      { id: 'established', label: 'Business is steady — I want structure to grow it further' },
    ],
  },
  {
    id: 'biggest-challenge',
    question: 'What’s the biggest thing holding your business back right now?',
    sub: 'Be honest — this is the thing Push Group Max would work on first.',
    options: [
      { id: 'marketing-bursts', label: 'My marketing happens in bursts, then goes quiet' },
      { id: 'sales-leak', label: 'People ask “how much?” — but too few actually pay' },
      { id: 'unclear-offer', label: 'My offer takes too long to explain' },
      { id: 'numbers', label: 'I’m guessing at my numbers' },
      { id: 'execution', label: 'Ideas pile up — nothing actually gets shipped' },
    ],
  },
  {
    id: 'desired-outcome',
    question: 'Eight weeks from now, what do you most want to be true?',
    sub: 'Choose the outcome that matters most to you.',
    options: [
      { id: 'clear-offer', label: 'An offer customers understand — and buy' },
      { id: 'marketing-rhythm', label: 'Marketing that runs every single week' },
      { id: 'sales-process', label: 'A simple sales process I can actually follow' },
      { id: 'systems-accountability', label: 'Systems, structure, and people who keep me accountable' },
    ],
  },
  {
    id: 'readiness',
    question: 'Push Group Max is 8 weeks of real implementation — not another course to collect. Are you ready to do the work each week?',
    sub: 'There’s no wrong answer. This just tells us if the timing is right.',
    options: [
      { id: 'ready', label: 'Yes — I’m ready to push', hint: 'I can commit time every week for 8 weeks' },
      { id: 'tight-schedule', label: 'I want to — but my schedule is tight', hint: 'I’d need to plan around work and life' },
      { id: 'exploring', label: 'Not yet — I’m still exploring', hint: 'I’d like to understand the offer first' },
    ],
  },
]

const STORAGE_KEY = 'pgm_qualification'

export interface QualificationState {
  answers: Record<string, string>
  updatedAt: string
}

/** Persist answers in the current session so the visitor doesn't lose them. */
export function saveQualificationAnswers(answers: Record<string, string>): void {
  try {
    const state: QualificationState = { answers, updatedAt: new Date().toISOString() }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* session storage unavailable — non-blocking */
  }
}

export function loadQualificationAnswers(): Record<string, string> {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const state = JSON.parse(raw) as QualificationState
    return state.answers ?? {}
  } catch {
    return {}
  }
}
