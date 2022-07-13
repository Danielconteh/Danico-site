import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as Style from "../../style/project.module.scss"

// import { Link } from 'gatsby'

const query = graphql`
  {
    images: allFile(
      filter: { relativePath: { nin: ["banner-1.jpg", "banner-2.jpg"] } }
      sort: { fields: relativePath }
    ) {
      totalCount
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const externalSitLink = [
  "https://bedify.netlify.app/", // bedify
  "https://danflix-movie.netlify.app/", // danflix
  "https://django-natours.herokuapp.com/", // django
  "https://sveltekit-recipe.netlify.app/", // sveltekit-recipe
  "https://luxury-building.vercel.app/", // luxury-building
]

const Potfolio = () => {
  const data = useStaticQuery(query)
  const {
    images: { edges },
  } = data

  return (
    // id = projects (for smooth scrolling)

    <div id="projects" className={Style.potfolio_container}>
      <div className="center_title">
        <div className="title_text">
          <h1>projects</h1>
          <div className="uderline"></div>
        </div>
      </div>

      {/* grid of websit */}

      <div className={Style.image_container}>
        {edges.map((img, i) => {
          const { src, srcSet, sizes } =
            img?.node?.childImageSharp?.gatsbyImageData?.images?.fallback
          const easeInTrans = "ease-out-back"
          return (
            <>
              <a
                href={externalSitLink[i]}
                target="_blank"
                rel="noreferrer"
                data-sal="flip-up"
                data-sal-duration="1000"
                data-sal-delay="200"
                data-sal-easing={easeInTrans}
              >
                <img
                  src={src}
                  alt="banner"
                  sizes={sizes}
                  srcset={srcSet}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </a>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Potfolio
