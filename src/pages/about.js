import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../../style/about.module.scss"

const About = () => {

  return (
    // id = about (for smooth scrolling)

    <main id="about" className={[style.about_container__parent,'bg_clr'].join(' ')}>
      <div className="center_title">
        <div className="title_text">
          <h1 className={style.header_h1}>about</h1>
          <div className="uderline"></div>
        </div>
      </div>
      {/* GRID SETUP START HERE */}

      <article className={style.about_container__wrapper}>
        <div
          className={style.about_info}
        >
      <p>  Every person has their unique story. Here is a glimpse into mine. My is Daniel Conteh a programmer with over 5 years of experience in the tech industry. I received a Professional Diploma in Software Aplication and Database Management system from Alison online study in 2018. After graduation, I began my career as a software engineer and data scientist at a small startup company, where I worked on analyzing data, developing and maintaining web applications, Desktop and Mobile application.
      </p>


      <p>I worked as a data scientist at Bizpal Ltd and Sierrahub in 2021-2022. Where I was responsible for analyzing and interpreting large data sets and creating predictive models to help the organization, make data-driven decisions. </p>

        </div>
        <div
          className={style.test}
        >
          <StaticImage
            src="../../images/about_img.jpg"
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
