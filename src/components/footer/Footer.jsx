import block from 'bem-cn'
import React from 'react'
import './Footer.scss'

const b = block('footer')

export const Footer = () => (
  <footer className={b()}>
    <div className={b('footer-line')}>Россия </div>
  </footer>
)
