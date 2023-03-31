import React, { FC } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { useMaterial } from '../../../../hooks'
import { DataType } from '../../../../slice'

type PropsType = {
  data: DataType[]
}

export const MaterialSelect: FC<PropsType> = ({ data }) => {
  const { material, materials, changeMaterial } = useMaterial(data)

  return (
    <div>
      <label htmlFor={'material'}>material: </label>
      <select id={'material'} onChange={changeMaterial} value={material}>
        {materials.map(m => (
          <option key={nanoid()} value={m.name}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  )
}
