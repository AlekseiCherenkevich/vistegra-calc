import React, { FC } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { usePipe } from '../../../../hooks/use-pipe'
import { DataType } from '../../../../slice'

type PropsType = {
  data: DataType[]
}

export const PipeSelect: FC<PropsType> = ({ data }) => {
  const { pipe, pipes, changePipe } = usePipe(data)

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
