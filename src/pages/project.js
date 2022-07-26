import React from "react"

import * as Style from "../../style/project.module.scss"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import { uid } from 'uid';

// import { Link } from 'gatsby'


const externalSitLink = [
  "https://bedify.netlify.app/", // bedify
  "https://danflix-movie.netlify.app/", // danflix
  "https://django-natours.herokuapp.com/", // django
  "https://sveltekit-recipe.netlify.app/", // sveltekit-recipe
  "https://luxury-building.vercel.app/", // luxury-building
  'https://health-matter.vercel.app/' //health-matter.vercel.app/
]

const Project = ({ data}) => {

  return (
    // id = projects (for smooth scrolling)

    <div id="projects" className={[Style.potfolio_container,'bg_clr'].join(' ')}>
      <div className="center_title">
        <div className="title_text">
          <h3 className={Style.header_h1}>projects</h3>
          <div className="uderline"></div>
        </div>
      </div>

      {/* grid of websit */}

      <div className={Style.image_container}>
      {data?.images?.edges.map((el, i) => {
    
          return (
            <>
              <a
              key={uid()}
                href={externalSitLink[i]}
                target="_blank"
                rel="noreferrer"
               
              >
                <GatsbyImage image={getImage(el.node)} alt="project" />
                
              </a>
            </>
          )
        })} 
      </div>
    </div>
  )
}

export default Project
