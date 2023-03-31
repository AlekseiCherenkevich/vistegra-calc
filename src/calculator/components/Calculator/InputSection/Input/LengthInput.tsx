import React, { FC } from 'react'

import { useSize } from '../../../../hooks'
import { ConfigType } from '../../../../slice'

type PropsType = {
  config: ConfigType[]
}

export const LengthInput: FC<PropsType> = ({ config }) => {
  const { value: length, changeValue: changeLength } = useSize(config, 'length')

  return (
    <div>
      length: <input type="number" value={length} onChange={changeLength} />
    </div>
  )
}
