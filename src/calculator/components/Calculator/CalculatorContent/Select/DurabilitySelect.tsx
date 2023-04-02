import React, { ChangeEvent, FC } from 'react'

import { ConfigType } from '../../../../models'
import { SSelect, SSelectIputWrapper } from '../../../../styles'

type PropsType = {
  durability: ConfigType
  durabilities: ConfigType[]
  changeDurability: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const DurabilitySelect: FC<PropsType> = ({ durability, durabilities, changeDurability }) => {
  return (
    <SSelectIputWrapper>
      <label htmlFor={'durability'}>Прочность </label>
      <SSelect>
        <select id={'durability'} onChange={changeDurability} value={durability.name}>
          {durabilities.map(d => (
            <option key={d.key} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
      </SSelect>
    </SSelectIputWrapper>
  )
}
