import { ConfigType } from '../models'

import { roundNumber } from './round-number'

export const getFixQuantity = (
  listMateral?: string,
  fixConfigs?: ConfigType[],
  width?: number,
  length?: number
) => {
  if (!listMateral || !fixConfigs || !width || !length)
    throw new Error('fixConfigs, listMateral, width or length not found')

  const fixConfig = fixConfigs?.find(c => c.key === listMateral)

  if (!fixConfig) throw new Error('fixConfig not found')

  return roundNumber(width * length * fixConfig.value!)
}
