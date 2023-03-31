import { ChangeEvent, useState } from 'react'

import { DataType } from '../models'

export const usePipe = (data: DataType[]) => {
  const pipes = data.filter(el => el.type === 'pipe')

  const initName = pipes[0].name

  const [pipeName, setPipeName] = useState(initName)

  const changePipe = (e: ChangeEvent<HTMLSelectElement>) => {
    setPipeName(e.currentTarget.value)
  }

  const pipe = pipes.find(p => p.name === pipeName)

  if (!pipe) throw new Error('pipe not found')

  return { pipe, pipes, changePipe }
}
