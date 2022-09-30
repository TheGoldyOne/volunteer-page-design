import React, { useEffect } from 'react'

import './Navbar.scss'

export default function Navbar() {

  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 66) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container" >
          <img className="logo" src="https://addons.mozilla.org/static-frontend/459ebe418a9783cd0b80bdd8b98e5faa.svg" alt="Logo" />
        <ul>
          <li>Aktualności</li>
          <li>O Nas</li>
          <li>Dla organizatora</li>
          <li>Dla wolontariusza</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  )
}
