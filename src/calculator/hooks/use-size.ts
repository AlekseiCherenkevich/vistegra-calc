import { ChangeEvent, useState } from 'react'

import { ConfigType } from '../slice'

export const useSize = (config: ConfigType[], key: 'length' | 'width') => {
  const configParam = config.find(el => el.key === key)

  let min: number | undefined = undefined
  let max: number | undefined = undefined

  if (configParam) {
    min = configParam.min
    max = configParam.max
  }

  const [value, setValue] = useState<number | undefined>(min)

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (!configParam) return

    const value = Number(e.currentTarget.value)

    if (min === undefined || max === undefined || value < min || value > max) return

    setValue(value)
  }

  return { value, changeValue }
}
