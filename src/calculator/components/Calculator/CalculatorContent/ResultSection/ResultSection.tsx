import React from 'react'

import { useSelector } from 'react-redux'

import { fixSelector, listSelector, pipeSelector } from '../../../../selectors'
import { SCalculatorSection } from '../../../../styles'

export const ResultSection = () => {
  const { pipe, pipeRunnigMeter } = useSelector(pipeSelector)
  const { fix, fixQuantity } = useSelector(fixSelector)
  const { list, listQuantity } = useSelector(listSelector)

  if (!pipe || !pipeRunnigMeter || !fix || !fixQuantity || !list || !listQuantity)
    throw new Error('result not found or not initialized')

  const pipeSumPrice = pipe.price * pipeRunnigMeter
  const fixSumPrice = fix.price * fixQuantity
  const listSumPrice = list.price * listQuantity

  return (
    <SCalculatorSection>
      <table>
        <thead>
          <tr>
            <td>Наименование</td>
            <td>ед.</td>
            <td>кол-во</td>
            <td>сумма</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list.name}</td>
            <td>{list.unit}</td>
            <td>{listQuantity}</td>
            <td>{listSumPrice}</td>
          </tr>
          <tr>
            <td>{pipe.name}</td>
            <td>{pipe.unit}</td>
            <td>{pipeRunnigMeter}</td>
            <td>{pipeSumPrice}</td>
          </tr>
          <tr>
            <td>{fix.name}</td>
            <td>{fix.unit}</td>
            <td>{fixQuantity}</td>
            <td>{fixSumPrice}</td>
          </tr>
        </tbody>
      </table>
    </SCalculatorSection>
  )
}
