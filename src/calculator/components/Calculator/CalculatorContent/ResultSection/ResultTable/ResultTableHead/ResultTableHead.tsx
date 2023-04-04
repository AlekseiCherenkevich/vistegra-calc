import React, { memo } from 'react'

export const ResultTableHead = memo(() => {
  return (
    <thead>
      <tr>
        <th>Наименование</th>
        <th>Ед.</th>
        <th>Кол-во</th>
        <th>Сумма</th>
        <th>Наличие в корзине</th>
        <th>Добавить в корзину</th>
      </tr>
    </thead>
  )
})
