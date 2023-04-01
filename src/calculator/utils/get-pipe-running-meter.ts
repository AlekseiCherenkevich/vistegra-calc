import { CeilType } from '../models'

import { roundNumber } from './round-number'

export const getPipeRunnigMeter = (
  length?: number,
  width?: number,
  step?: number,
  pipeWidth?: number
) => {
  if (!length || !width || !step || !pipeWidth) throw new Error('length, width or step not found')

  // Переводим сечение трубы в метры
  const pipeWidthRunningMeter = pipeWidth / 100

  const lengthCeilQuantity = Math.ceil(
    (length - pipeWidthRunningMeter) / (step + pipeWidthRunningMeter)
  )
  const widthCeilQuantity = Math.ceil(
    (width - pipeWidthRunningMeter) / (step + pipeWidthRunningMeter)
  )

  // если поперечные и продольные трубы лежат в отдной плоскости, необходимо усеньшить длину поперечной трубы на толщину продольной
  const reducedWidth = width - pipeWidthRunningMeter * (lengthCeilQuantity + 1)

  const ceil = {} as CeilType

  // Размеры ячейки берем от стенок профиля
  const ceilWidth = (width - (widthCeilQuantity + 1) * pipeWidthRunningMeter) / widthCeilQuantity
  const ceilLength =
    (length - (lengthCeilQuantity + 1) * pipeWidthRunningMeter) / lengthCeilQuantity

  const pipeLengthRunnigMeter =
    length * (lengthCeilQuantity + 1) + reducedWidth * (widthCeilQuantity + 1)

  ceil.width = roundNumber(ceilWidth)
  ceil.length = roundNumber(ceilLength)
  const roundedPipeLengthRunnigMeter = roundNumber(pipeLengthRunnigMeter)

  return { ceil, pipeLength: roundedPipeLengthRunnigMeter }
}
