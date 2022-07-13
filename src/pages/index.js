import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../../navbar_data/NavBar"
import Banner from "./Banner"
import About from "./about"
import Skill from "./skill"
import Project from "./project"
import Contact from "./contact"
import Footer from "./Footer"

// CSS SECTION
import "../../style/index.scss"
import "rc-banner-anim/assets/index.css" // BANNER ANIMATION SECTION

export default function Home() {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Danico"
        meta={[
          { name: "description", content: "Daniel Conteh" },
          {
            name: "keywords",
            content:
              "danico, daniel conteh, sierra leone, programmer, developer, coder, coding",
          },
          { name: "author", content: "Daniel Conteh" },
        ]}
      ></Helmet>
      <div className="grid_container">
        <Navbar />
        <Banner />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

//  ;<h2>
//    DANICO LEARNIG GATSBY JS <span>😜</span>!
//  </h2>
