import React, { ChangeEvent, FC } from 'react'

type PropsType = {
  width?: number
  changeWidth: (e: ChangeEvent<HTMLInputElement>) => void
}

export const WidthInput: FC<PropsType> = ({ width, changeWidth }) => {
  return (
    <div>
      width: <input type="number" value={width} onChange={changeWidth} />
    </div>
  )
}
