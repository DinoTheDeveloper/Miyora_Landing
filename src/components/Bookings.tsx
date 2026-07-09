import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import Socials from './Socials'
import Watermark from './Watermark'
import './Bookings.css'

const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Intimate Dinner',
  'Birthday Celebration',
  'Bridal Shower',
  'Gifting',
  'Other',
]

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const MIN_FILL_TIME_MS = 3000
const RESUBMIT_COOLDOWN_MS = 30000
const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 2000

type Status = 'idle' | 'sending' | 'success' | 'error' | 'blocked'

// Strips CR/LF and other control characters so a malicious value can't inject
// extra headers/lines into the outgoing email (email header injection).
function sanitizeLine(value: string, maxLength: number) {
  return value
    .replace(/[\r\n\x00-\x1f]/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function Bookings() {
  const [status, setStatus] = useState<Status>('idle')
  const [eventType, setEventType] = useState('')
  const [eventMenuOpen, setEventMenuOpen] = useState(false)
  const mountedAt = useRef(Date.now())
  const lastSubmitAt = useRef(0)
  const eventFieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!eventMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!eventFieldRef.current?.contains(event.target as Node)) {
        setEventMenuOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setEventMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [eventMenuOpen])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: a real visitor never sees or fills this field. Any value
    // here means a bot filled every input it could find — silently drop it.
    const honeypot = String(data.get('company_website') ?? '').trim()
    // Bots that submit within a couple of seconds of the page loading
    // haven't had time to actually read/fill the form.
    const filledInTime = Date.now() - mountedAt.current >= MIN_FILL_TIME_MS

    if (honeypot || !filledInTime) {
      // Pretend it worked so scripted bots don't learn to route around this check.
      setStatus('success')
      form.reset()
      setEventType('')
      return
    }

    if (Date.now() - lastSubmitAt.current < RESUBMIT_COOLDOWN_MS) {
      setStatus('blocked')
      return
    }

    const fullName = sanitizeLine(String(data.get('full_name') ?? ''), MAX_NAME_LENGTH)
    const email = sanitizeLine(String(data.get('email') ?? ''), MAX_NAME_LENGTH)
    const eventType = sanitizeLine(String(data.get('event_type') ?? ''), MAX_NAME_LENGTH)
    const preferredDate = sanitizeLine(String(data.get('preferred_date') ?? ''), 20)
    const message = sanitizeLine(String(data.get('message') ?? ''), MAX_MESSAGE_LENGTH)

    if (!fullName || !EMAIL_PATTERN.test(email) || !eventType || !message) {
      setStatus('error')
      return
    }

    const formattedDate = preferredDate
      ? new Date(`${preferredDate}T00:00:00`).toLocaleDateString('en-ZA', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : 'Not specified'

    const templateParams = {
      to_email: 'info@miyoracollective.co.za',
      name: fullName,
      time: new Date().toLocaleString('en-ZA', { dateStyle: 'full', timeStyle: 'short' }),
      message: [
        `Email: ${email}`,
        `Event Type: ${eventType}`,
        `Preferred Date: ${formattedDate}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      reply_to: email,
    }

    setStatus('sending')

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      lastSubmitAt.current = Date.now()
      setStatus('success')
      form.reset()
      setEventType('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="bookings" data-nav-section className="bookings">
      <h2 className="bookings__heading">Request a booking.</h2>
      <p className="bookings__subtext">
        Tell us a little about what you are planning, and we will be in touch to arrange a
        time to talk it through.
      </p>

      <form className="bookings__form" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real visitors via CSS, so only bots fill it in. */}
        <div className="bookings__honeypot" aria-hidden="true">
          <label htmlFor="company_website">Leave this field blank</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="bookings__field">
          <label htmlFor="full_name">Full Name</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            placeholder="Your Name"
            maxLength={MAX_NAME_LENGTH}
            autoComplete="name"
            required
          />
        </div>

        <div className="bookings__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            maxLength={MAX_NAME_LENGTH}
            autoComplete="email"
            required
          />
        </div>

        <div className="bookings__field" ref={eventFieldRef}>
          <label htmlFor="event_type">Event Type</label>
          <div className="bookings__select">
            <button
              type="button"
              id="event_type"
              className="bookings__select-trigger"
              aria-haspopup="listbox"
              aria-expanded={eventMenuOpen}
              onClick={() => setEventMenuOpen((open) => !open)}
            >
              <span className={eventType ? '' : 'bookings__select-placeholder'}>
                {eventType || 'Your Event'}
              </span>
            </button>
            {eventMenuOpen && (
              <ul className="bookings__select-menu" role="listbox">
                {EVENT_TYPES.map((type) => (
                  <li key={type} role="option" aria-selected={type === eventType}>
                    <button
                      type="button"
                      className="bookings__select-option"
                      onClick={() => {
                        setEventType(type)
                        setEventMenuOpen(false)
                      }}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <input type="hidden" name="event_type" value={eventType} required />
          </div>
        </div>

        <div className="bookings__field">
          <label htmlFor="preferred_date">Preferred Date</label>
          <input id="preferred_date" name="preferred_date" type="date" required />
        </div>

        <div className="bookings__field bookings__field--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us more"
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            required
          />
        </div>

        <div className="bookings__submit-row">
          <button type="submit" className="bookings__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
          </button>
        </div>

        {status === 'success' && (
          <p className="bookings__status bookings__status--success">
            Thank you! Your enquiry has been sent — we'll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="bookings__status bookings__status--error">
            Something went wrong sending your enquiry. Please check your details and try again,
            or email us directly at info@miyoracollective.co.za.
          </p>
        )}
        {status === 'blocked' && (
          <p className="bookings__status bookings__status--error">
            You've already sent an enquiry recently — please wait a moment before sending
            another.
          </p>
        )}
      </form>

      <Socials className="bookings__socials" />
      <Watermark />
    </section>
  )
}

export default Bookings
