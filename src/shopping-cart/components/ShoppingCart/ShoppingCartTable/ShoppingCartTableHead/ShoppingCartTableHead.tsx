import React, { FC, MouseEvent } from 'react'
import { SortType } from '../../../../models'
import { SSortableHeadCeils } from '../../../../styles'
import { getSortArrows } from '../../../../utils'

type PropsType = {
  sort: SortType
  changeSort: (event: MouseEvent<HTMLTableHeaderCellElement>) => void
}

export const ShoppingCartTableHead: FC<PropsType> = ({ sort, changeSort }) => {
  return (
    <thead>
      <tr>
        <SSortableHeadCeils id={'name'} onClick={changeSort}>
          Наименование
          {getSortArrows('name', sort)}
        </SSortableHeadCeils>
        <th>Ед.</th>
        <SSortableHeadCeils id={'quantity'} onClick={changeSort}>
          Кол-во
          {getSortArrows('quantity', sort)}
        </SSortableHeadCeils>
        <SSortableHeadCeils id={'totalPrice'} onClick={changeSort}>
          Сумма
          {getSortArrows('totalPrice', sort)}
        </SSortableHeadCeils>
        <th>Удалить товар</th>
      </tr>
    </thead>
  )
}
