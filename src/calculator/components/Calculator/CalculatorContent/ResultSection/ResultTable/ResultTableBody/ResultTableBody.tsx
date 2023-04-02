import React from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { getSerializedValue, SButtonSmall } from '../../../../../../../shared'
import { shoppingCardActions, shoppingCartSelector } from '../../../../../../../shopping-cart'
import { DataType } from '../../../../../../models'
import { resultSelector } from '../../../../../../selectors'

export const ResultTableBody = () => {
  const resultItems = useSelector(resultSelector)

  const { products } = useSelector(shoppingCartSelector)

  const dispatch = useDispatch()

  const renderedResultItems = resultItems.map(i => {
    const addToShoppingCart = () => {
      // Новый id нужен, чтобы можно было добавлять одинаковы товар в корзину много раз
      const newId = nanoid()

      dispatch(shoppingCardActions.addProduct({ product: { ...i, id: newId } }))
    }

    const checkProductInCsoppingCart = (item: DataType | null) => {
      return products.some(p => getSerializedValue(p.item) === getSerializedValue(item))
        ? 'Товар содержится в корзине'
        : ''
    }

    return (
      <tr key={i.id}>
        <td aria-describedby={'Наименование'}>{i.item?.name}</td>
        <td aria-describedby={'Ед.'}>{i.item?.unit}</td>
        <td aria-describedby={'Кол-во'}>{i.quantity}</td>
        <td aria-describedby={'Сумма'}>{i.totalPrice}</td>
        <td aria-describedby={'В корзине?'}>{checkProductInCsoppingCart(i.item)}</td>
        <td aria-describedby={'Добавить в корзину'}>
          <SButtonSmall onClick={addToShoppingCart}>Добавить</SButtonSmall>
        </td>
      </tr>
    )
  })

  return <tbody>{renderedResultItems}</tbody>
}
