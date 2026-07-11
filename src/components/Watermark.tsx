import logo from '../assets/icons/miyora-logo-cropped.webp'
import './Watermark.css'

type WatermarkProps = {
  className?: string
}

function Watermark({ className }: WatermarkProps) {
  return (
    <img
      src={logo}
      alt=""
      width={960}
      height={321}
      className={`watermark${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    />
  )
}

export default Watermark
