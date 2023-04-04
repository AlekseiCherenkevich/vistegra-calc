import React, { ChangeEvent, FC, memo } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { DataType } from '../../../../models'
import { SSelect, SSelectIputWrapper } from '../../../../styles'

type PropsType = {
  pipe: DataType
  pipes: DataType[]
  changePipe: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const PipeSelect: FC<PropsType> = memo(({ pipe, pipes, changePipe }) => {
  return (
    <SSelectIputWrapper>
      <label htmlFor={'pipe'}>Труба </label>
      <SSelect>
        <select id={'pipe'} onChange={changePipe} value={pipe.name}>
          {pipes.map(p => (
            <option key={nanoid()} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </SSelect>
    </SSelectIputWrapper>
  )
})
