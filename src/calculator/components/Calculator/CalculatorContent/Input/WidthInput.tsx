import React, { ChangeEvent, FC } from 'react'

import { SInput, SSelectWrapper } from '../../../../styles'
type PropsType = {
  width?: number
  changeWidth: (e: ChangeEvent<HTMLInputElement>) => void
}

export const WidthInput: FC<PropsType> = ({ width, changeWidth }) => {
  return (
    <SSelectWrapper>
      <label htmlFor={'width'}>Ширина</label>
      <SInput id={'width'} type="number" value={width} onChange={changeWidth} />
    </SSelectWrapper>
  )
}
