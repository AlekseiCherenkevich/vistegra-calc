import React, { ChangeEvent, FC } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { DataType } from '../../../../models'

type PropsType = {
  material: DataType
  materials: DataType[]
  changeMaterial: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const MaterialSelect: FC<PropsType> = ({ material, materials, changeMaterial }) => {
  return (
    <div>
      <label htmlFor={'material'}>material: </label>
      <select id={'material'} onChange={changeMaterial} value={material.name}>
        {materials.map(m => (
          <option key={nanoid()} value={m.name}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  )
}
