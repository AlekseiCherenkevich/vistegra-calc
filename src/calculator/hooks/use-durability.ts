import { ChangeEvent, useState } from 'react'

import { ConfigType } from '../slice'

export const useDurability = (state: ConfigType[]) => {
  const durabilities = state.filter((el: ConfigType) => el.type === 'frame')

  const initName = durabilities[0].name
  const [durability, setDurability] = useState<string>(initName)
  const changeDurability = (e: ChangeEvent<HTMLSelectElement>) => {
    setDurability(e.currentTarget.value)
  }

  return { durability, durabilities, changeDurability }
}
