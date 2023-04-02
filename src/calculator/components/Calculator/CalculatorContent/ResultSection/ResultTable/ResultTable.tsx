import React from 'react'

import { SCalculatorResultTable } from '../../../../../../shared'
import { ResultTableBody } from '../ResultTableBody/ResultTableBody'
import { ResultTableHead } from '../ResultTableHead'

export const ResultTable = () => {
  return (
    <SCalculatorResultTable>
      <ResultTableHead />
      <ResultTableBody />
    </SCalculatorResultTable>
  )
}
