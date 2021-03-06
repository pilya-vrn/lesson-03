import block from 'bem-cn'
import React from 'react'
// import backgroundImg from "images/hamburger.jpg";
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <span className={b('link-mail')}>Почта</span>
    <span className={b('link-img')}>Картинки</span>
    <div className={b('hamburger')} >
    </div>
    <img className={b('avatar')} src="images/photo.jpg" alt="Ваш аватар" />

    {/* <span className={b('title')}>
      Application title
    </span> */}

  </header>
)
