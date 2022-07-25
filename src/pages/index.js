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
import { graphql } from "gatsby"

export default function Home({data}) {
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
        <Project data={data}/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

//  ;<h2>
//    DANICO LEARNIG GATSBY JS <span>😜</span>!
//  </h2>

export const query =  graphql`
{
  images: allFile(
    filter: {relativePath: {nin: ["banner-1.jpg", "banner-2.jpg"]}}
    sort: {fields: relativePath}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
}
`