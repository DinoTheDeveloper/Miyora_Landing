import breadImage from '../assets/images/bread_image.png'
import letsEatCard from '../assets/images/menu_image_4.png'
import redTableSetting from '../assets/images/menu_image_3.png'
import floristsImage from '../assets/images/waiters_image.png'
import glassImage from '../assets/images/glass_image.png'
import greenFlorals from '../assets/images/flower_image_1.png'
import welcomeCard from '../assets/images/Menu_image.png'
import yellowBouquet from '../assets/images/flower_image_2.png'
import motionFlorals from '../assets/images/distorted_image.png'
import orchardMenu from '../assets/images/menu_image_2.png'
import Socials from './Socials'
import Watermark from './Watermark'
import './Gallery.css'

const GALLERY_ITEMS = [
  { src: breadImage, label: 'Grazing Table', area: 'a' },
  { src: letsEatCard, label: 'Golden Hour Dinner', area: 'b' },
  { src: redTableSetting, label: "Olwethu's Celebration", area: 'c' },
  { src: floristsImage, label: 'Behind The Scenes', area: 'd' },
  { src: glassImage, label: 'Champagne Toast', area: 'e' },
  { src: greenFlorals, label: 'Garden Florals', area: 'f' },
  { src: welcomeCard, label: 'Welcome Maria', area: 'g' },
  { src: yellowBouquet, label: 'Golden Bouquet', area: 'h' },
  { src: motionFlorals, label: 'Golden Hour', area: 'i' },
  { src: orchardMenu, label: 'Orchard Brunch', area: 'j' },
]

function Gallery() {
  return (
    <section id="gallery" data-nav-section className="gallery">
      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.label} className={`gallery__item gallery__item--${item.area}`}>
            <img src={item.src} alt={item.label} loading="lazy" />
            <div className="gallery__overlay">
              <span className="gallery__label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <Socials className="gallery__socials" />
      <Watermark />
    </section>
  )
}

export default Gallery
