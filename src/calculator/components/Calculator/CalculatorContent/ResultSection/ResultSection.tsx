import React from 'react'

import { useSelector } from 'react-redux'

import { SShoppingCartIcon } from '../../../../../shopping-cart'
import { resultSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

export const ResultSection = () => {
  const resultItems = useSelector(resultSelector)

  const addToShoppingCart = () => {
    console.log('addToShoppingCart')
  }

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
        <tbody>
          {resultItems.map(i => (
            <tr key={i.id}>
              <td>{i.item?.name}</td>
              <td>{i.item?.unit}</td>
              <td>{i.quantity}</td>
              <td>{i.totalPrice}</td>
              <td>
                <SShoppingCartIcon onClick={addToShoppingCart} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SCalculatorSection>
  )
}
