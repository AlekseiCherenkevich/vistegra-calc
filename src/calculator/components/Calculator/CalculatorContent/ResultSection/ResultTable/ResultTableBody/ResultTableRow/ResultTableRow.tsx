import React, { FC, memo, useCallback } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import { AnimatedButtonSmall, getSerializedValue } from '../../../../../../../../shared'
import { productsSelector, shoppingCardActions } from '../../../../../../../../shopping-cart'
import { DataType, ResultItem } from '../../../../../../../models'

type PropsType = {
  resultItem: ResultItem
}

export const ResultTableRow: FC<PropsType> = memo(({ resultItem }) => {
  if (!resultItem.item) throw new Error('item not found')

  const { unit, name } = resultItem.item

  const dispatch = useDispatch()

  const products = useSelector(productsSelector)

  const addToShoppingCart = useCallback(() => {
    // Новый id нужен, чтобы можно было добавлять одинаковы товар в корзину много раз
    const newId = nanoid()

    dispatch(shoppingCardActions.addProduct({ product: { ...resultItem, id: newId } }))
  }, [dispatch])

  const checkProductInCsoppingCart = useCallback(
    (item: DataType | null) => {
      return products.some(p => getSerializedValue(p.item) === getSerializedValue(item))
        ? 'Товар содержится в корзине'
        : ''
    },
    [products]
  )

  return (
    <tr>
      <td aria-describedby={'Наименование'}>{name}</td>
      <td aria-describedby={'Ед.'}>{unit}</td>
      <td aria-describedby={'Кол-во'}>{resultItem.quantity}</td>
      <td aria-describedby={'Сумма'}>{resultItem.totalPrice}</td>
      <td aria-describedby={'В корзине?'}>{checkProductInCsoppingCart(resultItem.item)}</td>
      <td aria-describedby={'Добавить в корзину'}>
        <AnimatedButtonSmall callback={addToShoppingCart}>Добавить</AnimatedButtonSmall>
      </td>
    </tr>
  )
})
