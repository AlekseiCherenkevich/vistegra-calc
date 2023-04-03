import React from 'react'

import { useSelector } from 'react-redux'

import { ceilSelector, squareSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

import { ResultTable } from './ResultTable'

export const ResultSection = () => {
  const { length: ceilLength, width: ceilWidth } = useSelector(ceilSelector)
  const square = useSelector(squareSelector)

  return (
    <SCalculatorSection>
      <ResultTable />
      <p>Площадь изделия - {square} м</p>
      <p>
        Размеры ячейки: длина - {ceilLength} м, ширина - {ceilWidth} м
      </p>
    </SCalculatorSection>
  )
}
