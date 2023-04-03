import React, { FC, useCallback } from 'react'

import { useDispatch } from 'react-redux'

import { ResultItem } from '../../../../../../calculator'
import { AnimatedButtonSmall } from '../../../../../../shared'
import { shoppingCardActions } from '../../../../../slice'

type PropsType = {
  product: ResultItem
}

export const ShoppingCartTableRow: FC<PropsType> = ({ product }) => {
  const dispatch = useDispatch()

  const removeProduct = useCallback(() => {
    dispatch(shoppingCardActions.removeProduct({ id: product.id }))
  }, [product, dispatch])

  return (
    <tr>
      <td aria-describedby={'Название'}>{product.item?.name}</td>
      <td aria-describedby={'Ед.'}>{product.item?.unit}</td>
      <td aria-describedby={'Кол-во'}>{product.quantity}</td>
      <td aria-describedby={'Сумма'}>{product.totalPrice}</td>
      <td aria-describedby={'Удалить из корзины'}>
        <AnimatedButtonSmall callback={removeProduct}>Удалить</AnimatedButtonSmall>
      </td>
    </tr>
  )
}
