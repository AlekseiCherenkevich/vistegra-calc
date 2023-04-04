import React, { FC, memo, MouseEvent } from 'react'

import { SortType } from '../../../../models'

import { ShoppingCartSortableHeadCeil } from './ShoppingCartHeadCeil'

type PropsType = {
  sort: SortType
  changeSort: (event: MouseEvent<HTMLTableHeaderCellElement>) => void
}

export const ShoppingCartTableHead: FC<PropsType> = memo(({ sort, changeSort }) => {
  return (
    <thead>
      <tr>
        <ShoppingCartSortableHeadCeil
          title={'Наименование'}
          name={'name'}
          sort={sort}
          changeSort={changeSort}
        />
        <th>Ед.</th>
        <ShoppingCartSortableHeadCeil
          title={'Кол-во'}
          name={'quantity'}
          sort={sort}
          changeSort={changeSort}
        />
        <ShoppingCartSortableHeadCeil
          title={'Сумма'}
          name={'totalPrice'}
          sort={sort}
          changeSort={changeSort}
        />
        <th>Удалить товар</th>
      </tr>
    </thead>
  )
})
