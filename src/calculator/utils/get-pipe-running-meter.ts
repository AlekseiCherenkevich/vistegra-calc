export const getPipeRunnigMeter = (
  length?: number,
  width?: number,
  step?: number,
  pipeWidth?: number
) => {
  if (!length || !width || !step || !pipeWidth) throw new Error('incorrect length, width, step')

  const pipeWidthRunningMeter = pipeWidth / 100

  const lengthCeilQuantity = Math.ceil(
    (length - pipeWidthRunningMeter) / (step + pipeWidthRunningMeter)
  )
  const widthCeilQuantity = Math.ceil(
    (width - pipeWidthRunningMeter) / (step + pipeWidthRunningMeter)
  )

  // если поперечные и продольные трубы лежат в отдной плоскости, необходимо усеньшить длину поперечной трубы на толщину продольной
  const reducedWidth = width - pipeWidthRunningMeter * (lengthCeilQuantity + 1)

  return length * (lengthCeilQuantity + 1) + reducedWidth * (widthCeilQuantity + 1)
}
