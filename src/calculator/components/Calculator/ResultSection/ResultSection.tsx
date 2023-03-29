import React from 'react'

import { SCalculatorSection } from '../../../styles'

export const ResultSection = () => {
  return (
    <SCalculatorSection>
      <table>
        <thead>
          <td>Наименование</td>
          <td>ед.</td>
          <td>кол-во</td>
          <td>сумма</td>
        </thead>
        <tbody>
          <tr>
            <td>Лист-12 0.5 ширина 0.5м</td>
            <td>м2</td>
            <td>10</td>
            <td>220</td>
          </tr>
          <tr>
            <td>Лист-12 0.5 ширина 0.5м</td>
            <td>м2</td>
            <td>10</td>
            <td>220</td>
          </tr>
        </tbody>
      </table>
    </SCalculatorSection>
  )
}
