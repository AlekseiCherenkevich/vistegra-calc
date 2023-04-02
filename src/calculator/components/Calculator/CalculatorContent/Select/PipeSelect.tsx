import React, { ChangeEvent, FC } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { DataType } from '../../../../models'
import { SSelectWrapper } from '../../../../styles'

type PropsType = {
  pipe: DataType
  pipes: DataType[]
  changePipe: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const PipeSelect: FC<PropsType> = ({ pipe, pipes, changePipe }) => {
  return (
    <SSelectWrapper>
      <label htmlFor={'pipe'}>pipe: </label>
      <select id={'pipe'} onChange={changePipe} value={pipe.name}>
        {pipes.map(p => (
          <option key={nanoid()} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </SSelectWrapper>
  )
}
