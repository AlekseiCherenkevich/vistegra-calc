import React, { FC } from 'react'

import { useSize } from '../../../../hooks'
import { ConfigType } from '../../../../slice'

type PropsType = {
  config: ConfigType[]
}

export const WidthInput: FC<PropsType> = ({ config }) => {
  const { value: width, changeValue: changeWidth } = useSize(config, 'width')

  return (
    <div>
      width: <input type="number" value={width} onChange={changeWidth} />
    </div>
  )
}
