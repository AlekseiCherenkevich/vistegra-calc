import React, { memo } from 'react'

import { SCalculatorResultTable } from '../../../../../../shared'

import { ResultTableBody } from './ResultTableBody'
import { ResultTableHead } from './ResultTableHead'

export const ResultTable = memo(() => {
  return (
    <SCalculatorResultTable>
      <ResultTableHead />
      <ResultTableBody />
    </SCalculatorResultTable>
  )
})
