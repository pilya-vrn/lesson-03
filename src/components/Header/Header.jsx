import block from 'bem-cn'
import React from 'react'
import './Header.css'
import avatar from "../../images/photo.jpg";

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <span className={b('link-mail')}>Почта</span>
    <span className={b('link-img')}>Картинки</span>
    <div className={b('hamburger')} >
    </div>
    <img className={b('avatar')} src={avatar} alt="Ваш аватар" />

    {/* <span className={b('title')}>
      Application title
    </span> */}

  </header>
)
