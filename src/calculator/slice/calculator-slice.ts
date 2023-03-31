import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

import { config, data } from '../data'
import { CalculatePayloadType, InitialStateType } from '../models'
import { getPipeRunnigMeter } from '../utils'

const initialState: InitialStateType = { data, config, result: { pipeRunnigMeter: null } }

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state, action: PayloadAction<CalculatePayloadType>) => {
      const { material, pipe, durability, length, width } = action.payload.data

      const step = durability.step

      console.log({ length, width, step, pipe, material })

      state.result.pipeRunnigMeter = getPipeRunnigMeter(length, width, step, pipe.width)

      console.log(current(state.result))
    },
  },
})

export const { reducer: calculatorReducer, actions: calculatorActions } = calculatorSlice
