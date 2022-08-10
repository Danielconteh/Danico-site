import React, { useState, useEffect, useRef } from "react"
import { uid } from 'uid';
import { FaBars } from "react-icons/fa"
import { links } from "./data"
import * as style from "../style/navbar.module.scss"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const navRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const backGround_dark = () => {
    if (
      window.pageYOffset >
      Math.round(linksContainerRef.current.getBoundingClientRect().top * 2)
    ) {
      navRef.current.style.background = "rgba(0,0,0,.85)"
    } else {
      setTimeout(() => {
        navRef.current.style.background = "rgba(0,0,0,0.4)"
      }, 100)
    }
  }

  const window_Width_Check = () => {
    backGround_dark()
    if (window.innerWidth > 800) {
      linksContainerRef.current.style.height = "auto"
    } else {
      linksContainerRef.current.style.height = ""
      setShowLinks(false)
    }
    // when scroll set it back to false

    // ================
  }

  const scrollToPoint = e => {
    e.preventDefault()

    Array.from(linksRef.current.children).forEach((el, i) => {
      Array.from(el.children).forEach(element => {
        element.style.color = ""
        e.target.style.color = "orange"
      })
    })
    const target = e.target.getAttribute("href")
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 33, // my own make up number to create small space
    })

    setShowLinks(false) // close window even if the target is the already active one!
  }

  //  CLICK ON THE BODY TO CLOSE
  const bodyClose = e => {
    if (!e.target.closest("#home")) window_Width_Check()
  }

  // USEEFFECT FUNCTION
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      navRef.current.style.background = "rgba(0,0,0,0.85)"
      document.body.addEventListener("click", bodyClose)
    } else {
      linksContainerRef.current.style.height = ""
      backGround_dark()
      document.body.removeEventListener("click", bodyClose)
    }
  }, [showLinks])

  useEffect(() => {
    ;["scroll", "resize", "load"].forEach(el =>
      window.addEventListener(el, window_Width_Check)
    )
    window_Width_Check() // initial calling befor event listeners are turn on

    return () => {
      ;["scroll", "resize", "load"].forEach(el =>
        window.removeEventListener(el, window_Width_Check)
      )
    }
  }, [])

  return (
    // id = home (for smooth scrolling)
    <nav id="home" className={style.nav} ref={navRef}>
      <div className={style.nav_center}>
        <div className={style.nav_header}>
          <span>danico</span>
          <button className={style.nav_toggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className={style.links_container} ref={linksContainerRef}>
          <ul className={style.links} ref={linksRef}>
            {links.map(link => {

              const {  url, text } = link
             
              return (
                <li key={uid(16)}>
                  <a
                    onClick={scrollToPoint}
                    href={url}
                    style={{
                      // color: id === 1 ? "orange":'', // intial starts
                    }}
                  >
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
