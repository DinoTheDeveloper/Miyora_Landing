import Socials from './Socials'
import Watermark from './Watermark'
import './Services.css'

const SERVICES = [
  {
    title: 'Event Planning',
    description:
      'Full-service planning for occasions that should feel effortless to attend and unforgettable to remember, from concept through to the final detail.',
  },
  {
    title: 'Event Styling & Tablescaping',
    description:
      'Transforming your vision into a beautifully curated celebration through thoughtful styling, refined details and a cohesive design that leaves a lasting impression.',
  },
  {
    title: 'Intimate Dinners & Celebrations',
    description:
      'Dinner parties, birthdays, bridal showers, and the occasions that deserve more than a last-minute plan. We design private experiences for the host who wants the result without the process.',
  },
]

function Services() {
  return (
    <section id="services" data-nav-section className="services">
      <div className="services__container">
        <h2 className="services__heading">What We Offer</h2>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="services__item">
              <h3 className="services__title">{service.title}</h3>
              <p className="services__text">{service.description}</p>
              <a href="#bookings" className="services__cta">
                Enquire
              </a>
            </div>
          ))}
        </div>
      </div>

      <Socials className="services__socials" />
      <Watermark />
    </section>
  )
}

export default Services
