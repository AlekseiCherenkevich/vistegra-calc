import { ChangeEvent, useState, useCallback } from 'react'

import { ConfigType } from '../models'

export const useDurability = (state: ConfigType[]) => {
  const durabilities = state.filter((el: ConfigType) => el.type === 'frame')

  const initName = durabilities[0].name
  const [durabilityName, setDurability] = useState<string>(initName)
  const changeDurability = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setDurability(e.currentTarget.value)
    },
    [setDurability]
  )

  let durability = durabilities.find(d => d.name === durabilityName)

  if (!durability) throw new Error('durability not found')

  return { durability, durabilities, changeDurability }
}
