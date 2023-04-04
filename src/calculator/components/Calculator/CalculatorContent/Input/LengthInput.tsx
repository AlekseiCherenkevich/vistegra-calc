import React, { ChangeEvent, FC, memo } from 'react'

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

export const LengthInput: FC<PropsType> = memo(({ length, changeLength, error }) => {
  return (
    <SInputErrorParentWrapper>
      <SSelectIputWrapper>
        <label htmlFor={'length'}>Длина</label>
        <SInput id={'length'} type="number" value={length} onChange={changeLength} />
      </SSelectIputWrapper>
      {error && (
        <SInputError initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {error}
        </SInputError>
      )}
    </SInputErrorParentWrapper>
  )
})
