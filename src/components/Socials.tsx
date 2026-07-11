import './Socials.css'

const SOCIALS = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@miyora.collective?_r=1&_t=ZS-97tL6i4WpIW',
    path: 'M16.5 3c.3 2.1 1.6 3.8 3.6 4.4v3.1c-1.3 0-2.6-.4-3.6-1.1v6.4c0 3.1-2.5 5.6-5.6 5.6S5.3 18.9 5.3 15.8s2.5-5.6 5.6-5.6c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h3.1z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/miyoracollective?igsh=ajY1dzJkcTk2aDFk&utm_source=qr',
    path: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.75 6.75a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1Eq12m5Wiu/?mibextid=wwXIfr',
    path: 'M14 22v-8h2.7l.4-3.1H14V9c0-.9.2-1.5 1.6-1.5H17V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H8.1V13H10.8v9H14z',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/27832625040',
    path: 'M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3zm0 1.8a7.2 7.2 0 0 1 6.1 11 7.1 7.1 0 0 1-6.1 3.6 7.2 7.2 0 0 1-3.6-1l-.3-.1-2.7.8.8-2.6-.2-.3A7.2 7.2 0 0 1 12 4.8zm-2.7 3.8c-.2 0-.5.1-.7.4-.2.3-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3l-1.9-.9c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.1-.5l-.9-2.1c-.1-.2-.3-.3-.5-.3z',
  },
]

type SocialsProps = {
  className?: string
}

function Socials({ className }: SocialsProps) {
  return (
    <ul className={`socials${className ? ` ${className}` : ''}`}>
      {SOCIALS.map((social) => (
        <li key={social.name}>
          <a href={social.href} aria-label={social.name} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d={social.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
