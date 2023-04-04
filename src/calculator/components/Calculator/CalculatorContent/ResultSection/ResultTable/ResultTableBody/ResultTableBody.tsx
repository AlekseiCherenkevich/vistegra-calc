import React, { useMemo, memo } from 'react'

import { useSelector } from 'react-redux'

import { resultSelector } from '../../../../../../selectors'

import { ResultTableRow } from './ResultTableRow'

export const ResultTableBody = memo(() => {
  const resultItems = useSelector(resultSelector)

  const arrayWithMemo = useMemo(() => {
    return [...resultItems]
  }, [])

  return (
    <tbody>
      {arrayWithMemo.map(i => (
        <ResultTableRow resultItem={i} key={i.id} />
      ))}
    </tbody>
  )
})
