import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Bookings from '../components/Bookings'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SEO from '../components/SEO'

const SECTION_LABELS: Record<string, string> = {
  home: '',
  'our-mission': 'Our Mission',
  services: 'Services',
  gallery: 'Gallery',
  bookings: 'Bookings',
  contact: 'Contact Us',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Miyōra Collective',
  description: 'A premium event planning and styling company based in South Africa.',
  url: 'https://miyoracollective.co.za',
  email: 'info@miyoracollective.co.za',
  telephone: '+27832625040',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
  },
  sameAs: [],
}

function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-section]'),
    )
    const lastSection = sections[sections.length - 1]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    // The observer's centre-band never reaches a short final section once
    // the page can't scroll further, so fall back to it once we hit bottom.
    const onScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      if (atBottom && lastSection) {
        setActiveSection(lastSection.id)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <SEO
        title="Miyōra Collective | Premium Event Planning & Styling in South Africa"
        description="Miyōra Collective is a premium event planning and styling company based in South Africa, crafting weddings, intimate dinners and celebrations from concept to final detail."
        path="/"
        jsonLd={JSON_LD}
      />
      <Nav label={SECTION_LABELS[activeSection]} />
      <Header />
      <Mission />
      <Services />
      <Gallery />
      <Bookings />
      <Footer />
    </>
  )
}

export default Home
