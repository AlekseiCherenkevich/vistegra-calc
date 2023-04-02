import React, { ChangeEvent, FC } from 'react'

import {
  SInput,
  SInputError,
  SInputErrorParentWrapper,
  SSelectIputWrapper,
} from '../../../../styles'

type PropsType = {
  length?: number
  changeLength: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string | null
}

export const LengthInput: FC<PropsType> = ({ length, changeLength, error }) => {
  return (
    <SInputErrorParentWrapper>
      <SSelectIputWrapper>
        <label htmlFor={'length'}>Длина</label>
        <SInput id={'length'} type="number" value={length} onChange={changeLength} />
      </SSelectIputWrapper>
      <SInputError>{error}</SInputError>
    </SInputErrorParentWrapper>
  )
}
