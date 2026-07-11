import { Link } from 'react-router-dom'
import Socials from './Socials'
import Watermark from './Watermark'
import { SERVICES } from '../data/services'
import './Services.css'

function Services() {
  return (
    <section id="services" data-nav-section className="services">
      <div className="services__container">
        <h2 className="services__heading">What We Offer</h2>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.slug} className="services__item">
              <h3 className="services__title">
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </h3>
              <p className="services__text">{service.shortDescription}</p>
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
