import React, { FC, MouseEvent, memo } from 'react'

import { SortType } from '../../../../../models'
import { SSortableHeadCeils } from '../../../../../styles'
import { getSortArrows } from '../../../../../utils'

type PropsType = {
  name: string
  title: string
  sort: SortType
  changeSort: (e: MouseEvent<HTMLTableHeaderCellElement>) => void
}

export const ShoppingCartSortableHeadCeil: FC<PropsType> = memo(
  ({ title, name, sort, changeSort }) => {
    return (
      <SSortableHeadCeils id={name} onClick={changeSort}>
        {title}
        {getSortArrows(name, sort)}
      </SSortableHeadCeils>
    )
  }
)
