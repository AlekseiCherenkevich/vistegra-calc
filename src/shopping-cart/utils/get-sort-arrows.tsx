import React from 'react'

import { SSortArrows } from '../../shared'
import { asc, desc } from '../../shared/assets'
import { SortType } from '../models'

export const getSortArrows = (name: string, sort: SortType) => {
  if (sort.ceil !== name) return

  return sort.sort === 'asc' ? <SSortArrows src={asc} /> : <SSortArrows src={desc} />
}
