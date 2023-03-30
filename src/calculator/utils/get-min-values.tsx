import { ConfigType } from '../slice'

export const getMinValues = (config: ConfigType[]) => {
  const lengthConfig = config.find(el => el.key === 'length')
  const widthConfig = config.find(el => el.key === 'width')

  const minLength = lengthConfig ? lengthConfig.min : undefined
  const minWidth = widthConfig ? widthConfig.min : undefined

  return { minLength, minWidth }
}
