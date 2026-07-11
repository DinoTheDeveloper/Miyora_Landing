import { Navigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import Watermark from '../components/Watermark'
import SEO from '../components/SEO'
import { getServiceBySlug } from '../data/services'
import './ServicePage.css'

function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <SEO
        title={`${service.title} | Miyōra Collective`}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />
      <Nav />

      <main className="service-page">
        <div className="service-page__container">
          <h1 className="service-page__heading">{service.title}</h1>

          {service.body.map((paragraph) => (
            <p key={paragraph} className="service-page__text">
              {paragraph}
            </p>
          ))}

          <a href="/#bookings" className="service-page__cta">
            Enquire Now
          </a>
        </div>

        <Socials className="service-page__socials" />
        <Watermark />
      </main>

      <Footer />
    </>
  )
}

export default ServicePage
