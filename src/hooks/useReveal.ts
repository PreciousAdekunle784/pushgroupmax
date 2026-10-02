import { useEffect } from 'react'

/**
 * Observes every `.rv` element once on mount and adds `.rv-in` when it
 * enters the viewport. Elements that should animate on scroll just carry
 * the `rv` class (plus optional `rv-d1`/`rv-d2`/`rv-d3` delays).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('rv-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rv-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
