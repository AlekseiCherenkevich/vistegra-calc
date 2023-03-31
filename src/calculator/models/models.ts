export type ConfigType = {
  type: string
  key: string
  name: string
  min?: number
  max?: number
  step?: number
  value?: number
}

export type DataType = {
  type: string
  name: string
  material?: string
  unit: string
  width?: number
  price: number
}

export type InitialStateType = {
  data: DataType[]
  config: ConfigType[]
  result: {
    pipeRunnigMeter: number | null
  }
}

export type CalculatePayloadType = {
  data: {
    material: DataType
    pipe: DataType
    durability: ConfigType
    length?: number
    width?: number
  }
}
