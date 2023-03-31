import React, { FC } from 'react'

import { useDurability } from '../../../../hooks/use-durability'
import { ConfigType } from '../../../../slice'

type PropsType = {
  config: ConfigType[]
}

export const DurabilitySelect: FC<PropsType> = ({ config }) => {
  const { durability, durabilities, changeDurability } = useDurability(config)

  return (
    <div>
      <label htmlFor={'durability'}>durability: </label>
      <select id={'durability'} onChange={changeDurability} value={durability}>
        {durabilities.map(d => (
          <option key={d.key} value={d.value}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  )
}
