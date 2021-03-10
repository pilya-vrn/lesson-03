import block from 'bem-cn'
import React from 'react'
import './Content.css'
import { SearchBox } from "../searchBox/SearchBox";
import logoGoogle from "../../images/logo.gif";

const b = block('content')

export const Content = () => (
  <main className={b()}>
    <img className={b('logo')} src={logoGoogle} alt="Логотип Гугла" />
    <SearchBox />
    <div className={b('content-buttons')}>
      <button>Поиск в Google</button>
      <button>Мне повезёт!</button>
    </div>
  </main>
)
