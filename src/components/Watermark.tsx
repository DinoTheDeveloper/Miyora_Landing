import logo from '../assets/icons/Logo_cropped.png'
import './Watermark.css'

type WatermarkProps = {
  className?: string
}

function Watermark({ className }: WatermarkProps) {
  return (
    <img
      src={logo}
      alt=""
      className={`watermark${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    />
  )
}

export default Watermark
