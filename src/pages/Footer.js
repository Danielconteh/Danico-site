import React from 'react'
import * as style from '../../style/footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_info}>
        <p>
          {' '}
          <span>&copy; </span>copyright {new Date().getFullYear()}
        </p>
      </div>
      <div className={style.footer_Auther}>
        <div className={style.footer_Auther_img}>
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
