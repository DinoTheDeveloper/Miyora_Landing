import { useEffect, useState } from 'react'
import Header from './components/Header'
import Mission from './components/Mission'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Bookings from './components/Bookings'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css'

const SECTION_LABELS: Record<string, string> = {
  home: '',
  'our-mission': 'Our Mission',
  services: 'Services',
  gallery: 'Gallery',
  bookings: 'Bookings',
  contact: 'Contact Us',
}

function App() {
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

export default App
