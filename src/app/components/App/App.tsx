import React from 'react'

import { Calculator } from '../../../calculator'
import { ShoppingCart } from '../../../shopping-cart'
import { SContainer } from '../../styles'

import { Header } from './Header'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SContainer>
        <Calculator />
        <ShoppingCart />
      </SContainer>
    </div>
  )
}
