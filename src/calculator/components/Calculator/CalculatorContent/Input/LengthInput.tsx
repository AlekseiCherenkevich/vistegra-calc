import React, { ChangeEvent, FC } from 'react'

import { SSelectWrapper } from '../../../../styles'

type PropsType = {
  length?: number
  changeLength: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LengthInput: FC<PropsType> = ({ length, changeLength }) => {
  return (
    <SSelectWrapper>
      <label htmlFor={'length'}>Длина:</label>
      <input id={'length'} type="number" value={length} onChange={changeLength} />
    </SSelectWrapper>
  )
}
