import React, { FC, useCallback } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { AnimatedButtonSmall, getSerializedValue } from '../../../../../../../../shared'
import { shoppingCardActions, shoppingCartSelector } from '../../../../../../../../shopping-cart'
import { DataType, ResultItem } from '../../../../../../../models'

type PropsType = {
  resultItem: ResultItem
}

export const ResultTableRow: FC<PropsType> = ({ resultItem }) => {
  const { item, quantity, totalPrice } = resultItem

  if (!item) throw new Error('item not found')

  const { unit, name } = item

  const dispatch = useDispatch()

  const { products } = useSelector(shoppingCartSelector)

  const addToShoppingCart = useCallback(() => {
    // Новый id нужен, чтобы можно было добавлять одинаковы товар в корзину много раз
    const newId = nanoid()

    dispatch(shoppingCardActions.addProduct({ product: { ...resultItem, id: newId } }))
  }, [resultItem, dispatch])

  const checkProductInCsoppingCart = (item: DataType | null) => {
    return products.some(p => getSerializedValue(p.item) === getSerializedValue(item))
      ? 'Товар содержится в корзине'
      : ''
  }

  return (
    <tr>
      <td aria-describedby={'Наименование'}>{name}</td>
      <td aria-describedby={'Ед.'}>{unit}</td>
      <td aria-describedby={'Кол-во'}>{quantity}</td>
      <td aria-describedby={'Сумма'}>{totalPrice}</td>
      <td aria-describedby={'В корзине?'}>{checkProductInCsoppingCart(item)}</td>
      <td aria-describedby={'Добавить в корзину'}>
        <AnimatedButtonSmall callback={addToShoppingCart}>Добавить</AnimatedButtonSmall>
      </td>
    </tr>
  )
}
