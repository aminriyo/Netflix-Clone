import React, { useEffect, useState } from 'react'
import "./Nav.css"
import logo from "./img/logo.png"
import avater from "./img/cart.png"
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
      setShow(true)
    }else setShow(false)
  })
    return () => {
      window.removeEventListener('scroll',setShow)
    };
  }, []);
  return (
      <div className={`nav ${show && 'nav_black'}`}>
      <img src={ logo} alt="logo" className="nav-logo" />
      <img src={avater } alt="avater" className="nav-avater" />
    </div>
  )
}

export default Nav