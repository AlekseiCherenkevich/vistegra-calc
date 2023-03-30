import { createSlice } from '@reduxjs/toolkit'

import { config, data } from '../data'

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

type InitialStateType = {
  data: DataType[]
  config: ConfigType[]
}

const initialState: InitialStateType = { data, config }

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: state => state,
  },
})

export const calculatorReducer = calculatorSlice.reducer
