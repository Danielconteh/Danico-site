import React, { useEffect, useRef } from "react"
import BannerAnim, { Element } from "rc-banner-anim"
import * as style from "../../style/banner.module.scss"
import { graphql, useStaticQuery } from "gatsby"
// import { sizes } from "gatsby-plugin-sharp"

const query = graphql`
  {
    images: allFile(
      filter: { relativePath: { regex: "/banner/g" } }
      sort: { fields: relativePath }
    ) {
      totalCount
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const BgElement = Element.BgElement

const Banner = () => {
  const typingRef = useRef(null)
  const cusorRef = useRef(null)
  const textOffsetRef = useRef(null)

  const data = useStaticQuery(query)
  const {
    images: { edges },
  } = data

  useEffect(() => {
    const arr = [
      "creator",
      "designer",
      "developer",
      "programmer",
      "content creator",
    ]
    let currentIndex = 0 // arr[0 to end]
    let charIndex = 0 // arr[0] = johnny [charIndex= j ----]

    const type = () => {
      if (charIndex < arr[currentIndex].length) {
        if (!cusorRef.current.classList.contains(style.blink_remove))
          cusorRef.current.classList.add(style.blink_remove)
        typingRef.current.textContent += arr[currentIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, 200)
      } else {
        cusorRef.current.classList.remove(style.blink_remove)
        setTimeout(erase, 2000)
      }
    }

    const erase = () => {
      if (charIndex > 0) {
        typingRef.current.textContent = arr[currentIndex].substring(
          0,
          charIndex - 1
        )
        charIndex--
        setTimeout(erase, 100)
      } else {
        cusorRef.current.classList.remove(style.blink_remove)

        currentIndex++
        if (currentIndex >= arr.length) currentIndex = 0
        setTimeout(type, 250 + 1100)
      }
    }

    setTimeout(type, 2000)
    // END OF TEXT ANIMATION
  }, [])

  return (
    <main className={style.banner_container}>
      <header>
        <BannerAnim
          prefixCls="banner-user"
          autoPlay
          arrow={false}
          thumb={false}
          delay={5000}
          duration={800}
          style={{
            position: "relative",
            zIndex: -1,
          }}
        >
          {edges.map((img, i) => {
            const { src, srcSet, sizes } =
              img?.node?.childImageSharp?.gatsbyImageData?.images?.fallback
            return (
              <Element prefixCls="banner-user-elem" key={i}>
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundPosition: "center",
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                >
                  <img src={src} alt="banner" sizes={sizes} srcSet={srcSet} />
                </BgElement>
              </Element>
            )
          })}
        </BannerAnim>
      </header>
      <div className={style.bannerText}>
        <div ref={textOffsetRef} className={style.bannerText__text}>
          <div className={style.bannerText__text__content}>
            hi, i'm daniel conteh
          </div>
          <span ref={typingRef} className={style.type_text}></span>
          <span ref={cusorRef} className={style.cusorBlink}>
            &nbsp;
          </span>
        </div>
      </div>
    </main>
  )
}

export default Banner
