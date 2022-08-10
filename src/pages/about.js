import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../../style/about.module.scss"

const About = () => {

  return (
    // id = about (for smooth scrolling)

    <main id="about" className={style.about_container__parent}>
      <div className="center_title">
        <div className="title_text">
          <h1>about</h1>
          <div className="uderline"></div>
        </div>
      </div>
      {/* GRID SETUP START HERE */}

      <article className={style.about_container__wrapper}>
        <div
          className={style.about_info}
        >
          Every person has their unique story. Here is a glimpse into mine. My
          name is Daniel conteh. I am currently studying Computer Science and
          Engineering at Suliaha,Sierra Leone. While here, I grew interest in
          Websites and started learning about them on my own and one thing led
          to another and made me a Web developer. Currently looking for some
          cool projects and Internships. Feel free to explore the rest of my
          page as I hope you enjoy reading it as much as I have enjoyed creating
          it!
        </div>
        <div
          className={style.test}
        >
          <StaticImage
            src="../../images/me2.jpg"
            alt="Danico"
            className={style.about_img}
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={350}
          ></StaticImage>
        </div>
      </article>
    </main>
  )
}

export default About
