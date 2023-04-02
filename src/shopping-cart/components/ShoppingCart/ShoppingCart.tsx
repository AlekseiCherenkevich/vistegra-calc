import React from 'react'

import { RootState } from '../../../app/store'
import { Title } from '../../../shared'

import { ShoppingCartTable } from './ShoppingCartTable'

export const shoppingCartSelector = (state: RootState) => state.shoppingCard

export const ShoppingCart = () => {
  return (
    <article>
      <Title>Корзина товаров</Title>
      <ShoppingCartTable />
    </article>
  )
}
