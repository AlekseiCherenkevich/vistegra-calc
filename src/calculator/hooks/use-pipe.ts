import { ChangeEvent, useState } from 'react'

import { DataType } from '../slice'

export const usePipe = (data: DataType[]) => {
  const pipes = data.filter(el => el.type === 'pipe')
  const initName = pipes[0].name

  const [pipe, setPipe] = useState(initName)
  const changePipe = (e: ChangeEvent<HTMLSelectElement>) => {
    setPipe(e.currentTarget.value)
  }

  return { pipe, pipes, changePipe }
}
