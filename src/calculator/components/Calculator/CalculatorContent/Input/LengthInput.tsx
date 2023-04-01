import React, { ChangeEvent, FC } from 'react'

type PropsType = {
  length?: number
  changeLength: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LengthInput: FC<PropsType> = ({ length, changeLength }) => {
  return (
    <div>
      length: <input type="number" value={length} onChange={changeLength} />
    </div>
  )
}
