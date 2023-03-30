import { ChangeEvent, useState } from 'react'

import { ConfigType } from '../slice'

export const useSize = (
  initValue: number | undefined,
  config: ConfigType[],
  key: 'length' | 'width'
) => {
  const [value, setValue] = useState<number | undefined>(initValue)

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const paramConfig = config.find(el => el.key === key)

    if (!paramConfig) return

    const { min, max } = paramConfig
    const value = Number(e.currentTarget.value)

    if (min === undefined || max === undefined || value < min || value > max) return
    setValue(value)
  }

  return { value, changeValue }
}
