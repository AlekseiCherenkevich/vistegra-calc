import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { shoppingCardActions, SShoppingCartIcon } from '../../../../../shopping-cart'
import { resultSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

export const ResultSection = () => {
  const resultItems = useSelector(resultSelector)

  const dispatch = useDispatch()

  const renderedResultItems = resultItems.map(i => {
    const addToShoppingCart = () => {
      dispatch(shoppingCardActions.addProduct({ product: i }))
    }

    return (
      <tr key={i.id}>
        <td>{i.item?.name}</td>
        <td>{i.item?.unit}</td>
        <td>{i.quantity}</td>
        <td>{i.totalPrice}</td>
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
            <td>добавить в корзину</td>
          </tr>
        </thead>
        <tbody>{renderedResultItems}</tbody>
      </table>
    </SCalculatorSection>
  )
}
