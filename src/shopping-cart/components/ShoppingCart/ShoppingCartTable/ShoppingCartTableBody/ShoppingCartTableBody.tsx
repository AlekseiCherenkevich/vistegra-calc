import React, { FC } from 'react'

import { ResultItem } from '../../../../../calculator'

import { ShoppingCartTableRow } from './ShoppingCartTableRow'

type PropsType = {
  products: ResultItem[]
}

export const ShoppingCartTableBody: FC<PropsType> = ({ products }) => {
  return (
    <tbody>
      {products.map(p => (
        <ShoppingCartTableRow key={p.id} product={p} />
      ))}
    </tbody>
  )
}
