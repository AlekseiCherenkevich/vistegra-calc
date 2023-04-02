import React from 'react'

import { useSelector } from 'react-redux'

import { ceilSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

import { ResultTable } from './ResultTable'

export const ResultSection = () => {
  const { length: ceilLength, width: ceilWidth } = useSelector(ceilSelector)

  return (
    <SCalculatorSection>
      <ResultTable />
      <span>
        Размеры ячейки: длина - {ceilLength} м, ширина - {ceilWidth} м
      </span>
    </SCalculatorSection>
  )
}
