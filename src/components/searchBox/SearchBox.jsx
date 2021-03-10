import block from 'bem-cn'
import React from 'react'
import './SearchBox.css'

const b = block('searchBox')

export const SearchBox = () => (
  <div className={b()}>
    <input className={b('main-input')} type="text" ></input>
    {/* <div className={b('voice')}></div> */}
  </div>
)
