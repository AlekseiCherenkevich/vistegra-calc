import React, { ChangeEvent, FC } from 'react'

import {
  SInput,
  SInputError,
  SInputErrorParentWrapper,
  SSelectIputWrapper,
} from '../../../../styles'
type PropsType = {
  width?: number
  changeWidth: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string | null
}

export const WidthInput: FC<PropsType> = ({ width, changeWidth, error }) => {
  return (
    <SInputErrorParentWrapper>
      <SSelectIputWrapper>
        <label htmlFor={'width'}>Ширина</label>
        <SInput id={'width'} type="number" value={width} onChange={changeWidth} />
      </SSelectIputWrapper>
      <SInputError>{error}</SInputError>
    </SInputErrorParentWrapper>
  )
}
