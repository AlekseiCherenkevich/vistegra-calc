import React from 'react'

import { Calculator } from '../../../calculator/components/Calculator'
import { SContainer } from '../../styles'

import { Header } from './Header'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SContainer>
        <Calculator />
      </SContainer>
    </div>
  )
}
