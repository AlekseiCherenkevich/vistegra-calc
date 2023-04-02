import React, { FC } from 'react'

import { useDispatch } from 'react-redux'

import { ResultItem } from '../../../../../calculator'
import { SButtonSmall } from '../../../../../shared'
import { shoppingCardActions } from '../../../../slice'

type PropsType = {
  products: ResultItem[]
}

export const ShoppingCartTableBody: FC<PropsType> = ({ products }) => {
  const dispatch = useDispatch()

  const renderedProducts = products.map(p => {
    const removeProduct = () => {
      dispatch(shoppingCardActions.removeProduct({ id: p.id }))
    }

    return (
      <tr key={p.id}>
        <td aria-describedby={'Название'}>{p.item?.name}</td>
        <td aria-describedby={'Ед.'}>{p.item?.unit}</td>
        <td aria-describedby={'Кол-во'}>{p.quantity}</td>
        <td aria-describedby={'Сумма'}>{p.totalPrice}</td>
        <td aria-describedby={'Удалить из корзины'}>
          <SButtonSmall onClick={removeProduct}>Удалить</SButtonSmall>
        </td>
      </tr>
    )
  })

  return <tbody>{renderedProducts}</tbody>
}
