import block from 'bem-cn'
import React from 'react'
import './Content.css'

const b = block('content')

export const Content = () => (
  <main className={b()}>
      main content
  </main>
)
