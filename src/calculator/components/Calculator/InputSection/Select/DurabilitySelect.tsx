import React, { ChangeEvent, FC } from 'react'

import { ConfigType } from '../../../../slice'

type PropsType = {
  durability: string
  durabilities: ConfigType[]
  changeDurability: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const DurabilitySelect: FC<PropsType> = ({ durability, durabilities, changeDurability }) => {
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
