import { useEffect, useState } from 'react'

import { ConfigType, DataType } from '../models'

export const useToggleResultModes = (
  material: DataType,
  pipe: DataType,
  durability: ConfigType,
  length: number,
  width: number
) => {
  const [isHiddenResult, setIsHiddenResult] = useState(true)

  const showResult = () => {
    setIsHiddenResult(false)
  }

  const hideResult = () => {
    setIsHiddenResult(true)
  }

  useEffect(() => {
    hideResult()
  }, [material, pipe, durability, length, width])

  return { isHiddenResult, showResult }
}
