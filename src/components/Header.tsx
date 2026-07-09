import logo from '../assets/icons/Logo_cropped.png'
import Socials from './Socials'
import Watermark from './Watermark'
import './Header.css'

function Header() {
  return (
    <header id="home" data-nav-section className="hero">
      <div className="hero__content">
        <img src={logo} alt="Miyōra Collective" className="hero__logo" />
        <p className="hero__tagline">
          A premium events and gifting company based in South Africa.
        </p>
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
