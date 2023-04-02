import React from 'react'

import { useSelector } from 'react-redux'

import { useSortProducts } from '../../../hooks'
import { SEmptyShoppingCart, SShoppingCartTable, SShoppingCartTableWrapper } from '../../../styles'
import { shoppingCartSelector } from '../ShoppingCart'

import { ShoppingCartTableBody } from './ShoppingCartTableBody'
import { ShoppingCartTableHead } from './ShoppingCartTableHead'

export const ShoppingCartTable = () => {
  const { products } = useSelector(shoppingCartSelector)

  const totalPrice = products.reduce((accum: number, product) => accum + product.totalPrice, 0)

  const { sortedProducts, changeSort, sort } = useSortProducts(products)

  if (!products.length) return <SEmptyShoppingCart>Корзина пуста</SEmptyShoppingCart>

  return (
    <SShoppingCartTableWrapper>
      <SShoppingCartTable>
        <ShoppingCartTableHead changeSort={changeSort} sort={sort} />
        <ShoppingCartTableBody products={sortedProducts} />
      </SShoppingCartTable>
      <p>ИТОГО: {totalPrice} руб.</p>
    </SShoppingCartTableWrapper>
  )
}
