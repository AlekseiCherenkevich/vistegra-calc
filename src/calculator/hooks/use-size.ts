import { ChangeEvent, useState } from 'react'

import { ConfigType } from '../models'

export const useSize = (config: ConfigType[], key: 'length' | 'width') => {
  const configParam = config.find(el => el.key === key)

  if (!configParam) throw new Error('configParam not found')

  let min = configParam.min
  let max = configParam.max

  if (!min) throw new Error('min not found')

  const [value, setValue] = useState(min)

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (!configParam) return

    const value = Number(e.currentTarget.value)

    if (min === undefined || max === undefined || value < min || value > max) return

    setValue(value)
  }

  return { value, changeValue }
}
