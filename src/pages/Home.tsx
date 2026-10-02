import { useCallback, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import QualificationFlow from '../components/QualificationFlow'
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import WhatsInItForMe from '../sections/WhatsInItForMe'
import WhyThisIsForMe from '../sections/WhyThisIsForMe'
import Transformation from '../sections/Transformation'
import Testimonials from '../sections/Testimonials'
import Guarantee from '../sections/Guarantee'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'

/**
 * Push Group Max — conversion landing page.
 * Structure follows the hand-drawn wireframe exactly:
 * Hero → What's in it for me → Why is this for me → Before/After
 * transformation → Testimonials → Guarantee → FAQ → Final CTA / Footer.
 *
 * Every primary CTA opens the 4-question QualificationFlow, which then
 * redirects to the About page. No price appears anywhere on this page.
 */
export default function Home() {
  const [qualificationOpen, setQualificationOpen] = useState(false)
  const openQualification = useCallback(() => setQualificationOpen(true), [])
  const closeQualification = useCallback(() => setQualificationOpen(false), [])

  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav onStartQualification={openQualification} />
      <main>
        <Hero onStartQualification={openQualification} />
        <WhatsInItForMe onStartQualification={openQualification} />
        <WhyThisIsForMe />
        <Transformation onStartQualification={openQualification} />
        <Testimonials />
        <Guarantee onStartQualification={openQualification} />
        <FAQ />
        <FinalCTA onStartQualification={openQualification} />
        <Footer />
      </main>
      <QualificationFlow open={qualificationOpen} onClose={closeQualification} />
    </>
  )
}
