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
            src="../../images/me.jpg"
            alt="footer_Auther_img"
            className={style.about_img}
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            width={150}
            height={150}
            style={{
              // mixBlendMode:'multiply'
              borderRadius: '50%',
              marginRight: '1rem',
              objectFit: 'cover',
            }}
          ></StaticImage>
        </div>
        <p>Daniel conteh</p>
      </div>
    </div>
  )
}

export default Footer
