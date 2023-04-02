import React from 'react'

import { useSelector } from 'react-redux'

import { SShoppingCartTable, SShoppingCartTableWrapper } from '../../../styles'
import { shoppingCartSelector } from '../ShoppingCart'

import { ShoppingCartTableBody } from './ShoppingCartTableBody'
import { ShoppingCartTableHead } from './ShoppingCartTableHead'

export const ShoppingCartTable = () => {
  const { products } = useSelector(shoppingCartSelector)

  const totalPrice = products.reduce((accum: number, product) => accum + product.totalPrice, 0)

  if (!products.length) return <p>Корзина пуста</p>

  return (
    <SShoppingCartTableWrapper style={{ border: '1px solid red' }}>
      <SShoppingCartTable style={{ border: '1px solid red' }}>
        <ShoppingCartTableHead />
        <ShoppingCartTableBody products={products} />
      </SShoppingCartTable>
      <p>ИТОГО: {totalPrice} руб.</p>
    </SShoppingCartTableWrapper>
  )
}
