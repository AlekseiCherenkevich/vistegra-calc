import React from 'react'

import { useSelector } from 'react-redux'

import { resultSelector } from '../../../../../../selectors'

import { ResultTableRow } from './ResultTableRow'

export const ResultTableBody = () => {
  const resultItems = useSelector(resultSelector)

  return (
    <tbody>
      {resultItems.map(i => (
        <ResultTableRow resultItem={i} key={i.id} />
      ))}
    </tbody>
  )
}
