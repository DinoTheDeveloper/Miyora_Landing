import grazingTable from '../assets/images/grazing-table-spread.webp'
import greenBrunchMenu from '../assets/images/green-brunch-menu-card.webp'
import goldenHourDinner from '../assets/images/golden-hour-dinner-table.webp'
import behindTheScenes from '../assets/images/event-staff-behind-the-scenes.webp'
import champagneToast from '../assets/images/champagne-toast-detail.webp'
import gardenFlorals from '../assets/images/garden-florals-arrangement.webp'
import goldenHourMenu from '../assets/images/golden-hour-menu-card.webp'
import goldenBouquet from '../assets/images/golden-bouquet-styling.webp'
import motionBlurFlorals from '../assets/images/motion-blur-florals.webp'
import orchardMenu from '../assets/images/orchard-menu-styling.webp'
import Socials from './Socials'
import Watermark from './Watermark'
import './Gallery.css'

const GALLERY_ITEMS = [
  { src: grazingTable, width: 1414, height: 2000, label: 'GRAZING TABLE', area: 'a' },
  { src: greenBrunchMenu, width: 993, height: 1410, label: 'GREEN-INSPIRED BRUNCH', area: 'b' },
  { src: goldenHourDinner, width: 1176, height: 1302, label: 'GOLDEN HOUR DINNER', area: 'c' },
  { src: behindTheScenes, width: 1288, height: 1142, label: 'BEHIND THE SCENES', area: 'd' },
  { src: champagneToast, width: 1142, height: 939, label: 'CHAMPAGNE TOAST', area: 'e' },
  { src: gardenFlorals, width: 1263, height: 1096, label: 'GARDEN FLORALS', area: 'f' },
  { src: goldenHourMenu, width: 1226, height: 1250, label: 'GOLDEN HOUR MENU', area: 'g' },
  { src: goldenBouquet, width: 1237, height: 1292, label: 'GOLDEN BOUQUET', area: 'h' },
  { src: motionBlurFlorals, width: 1230, height: 985, label: 'GOLDEN HOUR', area: 'i' },
  { src: orchardMenu, width: 1044, height: 1664, label: 'SUPPER STORIES', area: 'j' },
]

function Gallery() {
  return (
    <section id="gallery" data-nav-section className="gallery">
      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.label} className={`gallery__item gallery__item--${item.area}`}>
            <img
              src={item.src}
              alt={item.label}
              width={item.width}
              height={item.height}
              loading="lazy"
            />
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
