import React, { ChangeEvent, FC, memo } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { DataType } from '../../../../models'
import { SSelect, SSelectIputWrapper } from '../../../../styles'

type PropsType = {
  material: DataType
  materials: DataType[]
  changeMaterial: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const MaterialSelect: FC<PropsType> = memo(({ material, materials, changeMaterial }) => {
  return (
    <SSelectIputWrapper>
      <label htmlFor={'material'}>Профнастил </label>
      <SSelect>
        <select id={'material'} onChange={changeMaterial} value={material.name}>
          {materials.map(m => (
            <option key={nanoid()} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>
      </SSelect>
    </SSelectIputWrapper>
  )
})
