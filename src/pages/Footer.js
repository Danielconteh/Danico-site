import React from 'react'
import * as Style from '../../style/footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <div className={Style.footer_container}>
      <div className={Style.footer_info}>
        <p>
          {' '}
          <span>&copy; </span>copyright {new Date().getFullYear()}
        </p>
      </div>
      <div className={Style.footer_Auther}>
        <div className={Style.footer_Auther_img}>
            <StaticImage
            src="../../images/footer_img.jpg"
            alt="footer_Auther_img"
            placeholder="blurred"
            layout="constrained"
            objectFit="cover"
            width={150}
            height={150}
          ></StaticImage>
        </div>
        <p>Daniel conteh</p>
      </div>
    </div>
  )
}

export default Footer
