import React from 'react'

import { SCalculatorWrapper, Title } from '../../styles'

import { InputSection } from './InputSection'
import { ResultSection } from './ResultSection'

export const Calculator = () => {
  return (
    <main>
      <Title>calc</Title>
      <SCalculatorWrapper>
        <InputSection />
        <ResultSection />
      </SCalculatorWrapper>
    </main>
  )
}
