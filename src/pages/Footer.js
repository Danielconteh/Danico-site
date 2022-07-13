import React from 'react'
import * as style from '../../style/footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_info}>
        <p>
          {' '}
          <span>&copy; </span>copyright {new Date().getFullYear()}
        </p>
      </div>
      <div className={style.footer_Auther}>Daniel conteh</div>
    </div>
  )
}

export default Footer
