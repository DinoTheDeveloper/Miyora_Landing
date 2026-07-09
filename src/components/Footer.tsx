import Socials from './Socials'
import './Footer.css'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer id="contact" data-nav-section className="footer">
      <span className="footer__label">Contact Us</span>

      <div className="footer__details">
        <div className="footer__detail">
          <span className="footer__detail-label">Email:</span>
          <a href="mailto:info@miyoracollective.co.za">info@miyoracollective.co.za</a>
        </div>
        <div className="footer__detail">
          <span className="footer__detail-label">Phone:</span>
          <a href="tel:+27832625040">+27 83 262 5040</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">Miyōra Collective | {YEAR}</span>
        <Socials className="footer__socials" />
      </div>
    </footer>
  )
}

export default Footer
