import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ABOUT_URL,
  QUALIFICATION_QUESTIONS,
  loadQualificationAnswers,
  saveQualificationAnswers,
} from '../lib/funnel'
import { Wordmark } from '../sections/Nav'

interface Props {
  open: boolean
  onClose: () => void
}

type Phase = 'questions' | 'submitting' | 'redirecting'

/**
 * The 4-question qualification step.
 *
 * Every primary CTA on the landing page opens this flow. After Question 4
 * is answered, the answers are persisted to sessionStorage and the visitor
 * is redirected to the exact About page URL — never to checkout, never to
 * another form.
 */
export default function QualificationFlow({ open, onClose }: Props) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<Phase>('questions')
  const [selected, setSelected] = useState<string | null>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const timers = useRef<number[]>([])

  const questions = QUALIFICATION_QUESTIONS
  const current = questions[step]

  // Reset / restore when the flow opens
  useEffect(() => {
    if (!open) return
    const saved = loadQualificationAnswers()
    const firstUnanswered = questions.findIndex((q) => !saved[q.id])
    setAnswers(saved)
    setStep(firstUnanswered === -1 ? 0 : firstUnanswered)
    setPhase('questions')
    setSelected(null)
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll while the flow is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Focus the first option whenever the step changes
  useEffect(() => {
    if (!open || phase !== 'questions') return
    const t = window.setTimeout(() => optionRefs.current[0]?.focus(), 60)
    return () => window.clearTimeout(t)
  }, [open, step, phase])

  // Escape closes (except mid-submit)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && phase === 'questions') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, phase, onClose])

  // Clean up pending timers on unmount
  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  const redirectToAbout = useCallback(() => {
    setPhase('redirecting')
    // Brief, intentional pause so the transition reads as deliberate,
    // then send the visitor to the exact About page.
    const t = window.setTimeout(() => {
      window.location.assign(ABOUT_URL)
    }, 1600)
    timers.current.push(t)
  }, [])

  const handleSelect = (optionId: string) => {
    if (phase !== 'questions' || selected) return
    setSelected(optionId)
    const nextAnswers = { ...answers, [current.id]: optionId }
    setAnswers(nextAnswers)
    saveQualificationAnswers(nextAnswers)

    const t = window.setTimeout(() => {
      setSelected(null)
      if (step < questions.length - 1) {
        setStep(step + 1)
      } else {
        // Question 4 answered — submit and redirect to the About page.
        setPhase('submitting')
        const t2 = window.setTimeout(redirectToAbout, 900)
        timers.current.push(t2)
      }
    }, 280)
    timers.current.push(t)
  }

  const handleBack = () => {
    if (phase !== 'questions' || step === 0) return
    setSelected(null)
    setStep(step - 1)
  }

  if (!open) return null

  const progress = phase === 'questions' ? ((step + 1) / questions.length) * 100 : 100

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-espresso text-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Push Group Max qualification — 4 quick questions"
    >
      {/* Header */}
      <div className="wrap flex items-center justify-between gap-4 py-[1.1rem]">
        <Wordmark />
        {phase === 'questions' && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close qualification questions and return to the page"
            className="grid h-[2.4rem] w-[2.4rem] place-items-center rounded-full border border-paper/30 text-paper/80 transition-colors duration-200 hover:border-paper hover:text-paper"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      <div className="wrap flex min-h-[calc(100dvh-9.5rem)] flex-col pb-[3rem]">
        {/* Progress */}
        <div className="mb-[2.2rem]">
          <p className="mb-[0.7rem] text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-camel" aria-live="polite">
            {phase === 'questions' ? `Question ${step + 1} of ${questions.length}` : 'All 4 questions answered'}
          </p>
          <div
            className="h-[3px] w-full overflow-hidden rounded-full bg-paper/15"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-valuenow={phase === 'questions' ? step + 1 : questions.length}
            aria-label="Qualification progress"
          >
            <div
              className="h-full rounded-full bg-terra transition-all duration-500 ease-brand"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {phase === 'questions' && current && (
          <div key={current.id} className="q-step mx-auto w-full max-w-[44rem] flex-1">
            <h2 className="h-serif mb-[0.8rem] text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.08] text-paper">
              {current.question}
            </h2>
            {current.sub && <p className="mb-[2rem] text-[0.98rem] text-paper/65">{current.sub}</p>}

            <div className="grid gap-[0.9rem]" role="group" aria-label="Answer options">
              {current.options.map((opt, i) => {
                const isSelected = selected === opt.id
                const wasAnswered = answers[current.id] === opt.id
                return (
                  <button
                    key={opt.id}
                    ref={(el) => {
                      optionRefs.current[i] = el
                    }}
                    type="button"
                    onClick={() => handleSelect(opt.id)}
                    aria-pressed={isSelected || wasAnswered}
                    className={`group flex items-center justify-between gap-[1rem] rounded-[4px] border-[1.5px] px-[1.4rem] py-[1.15rem] text-left transition-all duration-200 ease-brand ${
                      isSelected
                        ? 'border-terra bg-terra text-paper'
                        : 'border-paper/20 bg-paper/[0.04] text-paper hover:border-camel hover:bg-paper/[0.08]'
                    }`}
                  >
                    <span>
                      <span className="block text-[1.02rem] font-semibold leading-[1.35]">{opt.label}</span>
                      {opt.hint && (
                        <span
                          className={`mt-[0.25rem] block text-[0.85rem] ${
                            isSelected ? 'text-paper/80' : 'text-paper/55'
                          }`}
                        >
                          {opt.hint}
                        </span>
                      )}
                    </span>
                    <span
                      className={`grid h-[1.5rem] w-[1.5rem] flex-none place-items-center rounded-full border-[1.5px] transition-all duration-200 ${
                        isSelected ? 'border-paper bg-paper text-terra' : 'border-paper/35 text-transparent'
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Back + reassurance */}
            <div className="mt-[2.2rem] flex flex-wrap items-center justify-between gap-[1rem]">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-[0.5rem] text-[0.92rem] font-semibold text-paper/70 transition-colors duration-200 hover:text-paper"
                >
                  <span aria-hidden="true">←</span> Back
                </button>
              ) : (
                <span />
              )}
              <p className="text-[0.82rem] text-paper/50">
                Your answers stay on this device — no payment, no sign-up here.
              </p>
            </div>
          </div>
        )}

        {(phase === 'submitting' || phase === 'redirecting') && (
          <div className="q-step mx-auto flex w-full max-w-[44rem] flex-1 flex-col items-center justify-center text-center">
            <div
              className="mb-[1.8rem] h-[3rem] w-[3rem] animate-spin rounded-full border-[3px] border-paper/20 border-t-terra"
              role="status"
              aria-label={phase === 'submitting' ? 'Saving your answers' : 'Redirecting'}
            />
            <h2 className="h-serif mb-[0.9rem] text-[clamp(1.6rem,3.4vw,2.4rem)] text-paper">
              {phase === 'submitting' ? 'That’s everything.' : 'Taking you to the full Push Group Max offer…'}
            </h2>
            <p className="max-w-[30em] text-[0.98rem] leading-[1.6] text-paper/70">
              {phase === 'submitting'
                ? 'Thank you — your answers are in.'
                : 'Next up: everything about the program, what’s included, and how to join the cohort.'}
            </p>
            {phase === 'redirecting' && (
              <a
                href={ABOUT_URL}
                className="mt-[1.8rem] border-b border-camel text-[0.92rem] font-semibold text-camel no-underline transition-colors hover:text-paper hover:border-paper"
              >
                Not redirected? Continue here →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
