import logo from '../assets/icons/miyora-logo-cropped.webp'
import Socials from './Socials'
import Watermark from './Watermark'
import './Header.css'

function Header() {
  return (
    <header id="home" data-nav-section className="hero">
      <div className="hero__content">
        <img
          src={logo}
          alt="Miyōra Collective"
          className="hero__logo"
          width={960}
          height={321}
          fetchPriority="high"
        />
        <h1 className="hero__tagline">
          A premium events company based in South Africa.
        </h1>
        <a href="#bookings" className="hero__cta">
          Enquire Now
        </a>
      </div>

      <Socials className="hero__socials" />
      <Watermark />
    </header>
  )
}

export default Header
