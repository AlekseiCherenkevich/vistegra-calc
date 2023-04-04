import React from 'react'

import { useSelector } from 'react-redux'

import { ceilSelector, squareSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

import { ResultTable } from './ResultTable'

export const ResultSection = () => {
  const { length: ceilLength, width: ceilWidth } = useSelector(ceilSelector)
  const square = useSelector(squareSelector)

  return (
    <SCalculatorSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ResultTable />
      <p>Площадь изделия - {square} м.кв.</p>
      <p>
        Размеры ячейки: {ceilLength}х{ceilWidth} м.
      </p>
    </SCalculatorSection>
  )
}
