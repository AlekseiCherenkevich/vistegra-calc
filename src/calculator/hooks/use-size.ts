import { ChangeEvent, useState, useCallback } from 'react'

import { ConfigType } from '../models'

export const useSize = (config: ConfigType[], key: 'length' | 'width') => {
  const configParam = config.find(el => el.key === key)

  if (!configParam) throw new Error('configParam not found')

  let min = configParam.min
  let max = configParam.max

  if (!min) throw new Error('min not found')

  const [value, setValue] = useState(min)
  const [error, setError] = useState<string | null>(null)

  const changeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!configParam) return

      let value: string | number = e.currentTarget.value

      const parsedValue = parseFloat(value)

      if (min === undefined || max === undefined) throw new Error('min or max not found')

      parsedValue < min || parsedValue > max
        ? setError(`Значение должно быть в пределах ${min} - ${max} м`)
        : setError(null)

      setValue(parsedValue)
    },
    [config, setError, setValue]
  )

  return { error, value, changeValue }
}
