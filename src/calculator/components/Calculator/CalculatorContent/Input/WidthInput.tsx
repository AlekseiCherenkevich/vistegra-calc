import React, { ChangeEvent, FC, memo } from 'react'

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

export const WidthInput: FC<PropsType> = memo(({ width, changeWidth, error }) => {
  return (
    <SInputErrorParentWrapper>
      <SSelectIputWrapper>
        <label htmlFor={'width'}>Ширина</label>
        <SInput id={'width'} type="number" value={width} onChange={changeWidth} />
      </SSelectIputWrapper>
      {error && (
        <SInputError initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {error}
        </SInputError>
      )}
    </SInputErrorParentWrapper>
  )
})
