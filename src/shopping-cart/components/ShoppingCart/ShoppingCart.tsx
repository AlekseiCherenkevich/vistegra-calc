import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../../app/store'
import { Title } from '../../../shared'

export const shoppingCartSelector = (state: RootState) => state.shoppingCard

export const ShoppingCart = () => {
  const { products } = useSelector(shoppingCartSelector)

  const totalPrice = products.reduce((accum: number, product) => accum + product.totalPrice, 0)

  const renderedProducts = products.map(p => {
    const removeProduct = () => {
      console.log(p)
    }

    return (
      <tr key={p.id}>
        <td>{p.item?.name}</td>
        <td>{p.item?.unit}</td>
        <td>{p.quantity}</td>
        <td>{p.totalPrice}</td>
        <td>
          <button onClick={removeProduct}>-</button>
        </td>
      </tr>
    )
  })

  const shoppingCartContent = products.length ? (
    <div>
      <table>
        <thead>
          <tr>
            <td>Наименование</td>
            <td>ед.</td>
            <td>кол-во</td>
            <td>сумма</td>
            <td>удалить товар</td>
          </tr>
        </thead>
        <tbody>{renderedProducts}</tbody>
      </table>
      <div>ИТОГО: {totalPrice} руб.</div>
    </div>
  ) : (
    <div>Корзина пуста</div>
  )

  return (
    <main>
      <Title>Корзина товаров</Title>
      {shoppingCartContent}
    </main>
  )
}
