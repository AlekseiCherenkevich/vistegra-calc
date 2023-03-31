import React, { ChangeEvent, FC } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { DataType } from '../../../../slice'

type PropsType = {
  pipe: string
  pipes: DataType[]
  changePipe: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const PipeSelect: FC<PropsType> = ({ pipe, pipes, changePipe }) => {
  return (
    <div>
      <label htmlFor={'pipe'}>pipe: </label>
      <select id={'pipe'} onChange={changePipe} value={pipe}>
        {pipes.map(p => (
          <option key={nanoid()} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  )
}
