import React from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { getSerializedValue } from '../../../../../shared'
import {
  shoppingCardActions,
  shoppingCartSelector,
  SShoppingCartIcon,
} from '../../../../../shopping-cart'
import { DataType } from '../../../../models'
import { ceilSelector, resultSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

export const ResultSection = () => {
  const resultItems = useSelector(resultSelector)
  const { length: ceilLength, width: ceilWidth } = useSelector(ceilSelector)
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
        <td>{i.item?.name}</td>
        <td>{i.item?.unit}</td>
        <td>{i.quantity}</td>
        <td>{i.totalPrice}</td>
        <td>{checkProductInCsoppingCart(i.item)}</td>
        <td>
          <SShoppingCartIcon onClick={addToShoppingCart} />
        </td>
      </tr>
    )
  })

  return (
    <SCalculatorSection>
      <table>
        <thead>
          <tr>
            <td>Наименование</td>
            <td>ед.</td>
            <td>кол-во</td>
            <td>сумма</td>
            <td>наличие товара в корзине</td>
            <td>добавить в корзину</td>
          </tr>
        </thead>
        <tbody>{renderedResultItems}</tbody>
      </table>
      <span>
        Длина ячейки - {ceilLength} м, ширина - {ceilWidth} м
      </span>
    </SCalculatorSection>
  )
}
