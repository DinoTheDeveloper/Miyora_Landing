import quoteMark from '../assets/images/quote_image.png'
import tableSketch from '../assets/images/table_image.png'
import Socials from './Socials'
import Watermark from './Watermark'
import './Mission.css'

function Mission() {
  return (
    <section id="our-mission" data-nav-section className="mission">
      <div className="mission__body">
        <div className="mission__copy">
          <h2 className="mission__heading">
            <img src={quoteMark} alt="" className="mission__quote" aria-hidden="true" />
            People remember how an event made them feel&hellip;
          </h2>
          <p className="mission__text">
            An event should feel elevated, thoughtful and memorable. The kind of experience
            people talk about long after it ends. Our goal is to make your event planning and
            styling experience as simple as possible. From the very first meeting to the very
            last details.
          </p>

          <a href="#bookings" className="mission__cta">
            Contact Us
          </a>

          <Socials className="mission__socials" />
        </div>

        <div className="mission__image">
          <img src={tableSketch} alt="Sketch of a styled event table setting" />
        </div>
      </div>

      <Watermark />
    </section>
  )
}

export default Mission
