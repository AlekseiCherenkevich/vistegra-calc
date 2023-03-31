import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

import { config, data } from '../data'
import { CalculatePayloadType, InitialStateType } from '../models'
import { getFixQuantity, getPipeRunnigMeter, getListQuantity } from '../utils'

const initialState: InitialStateType = {
  data,
  config,
  result: {
    pipe: { pipeRunnigMeter: null, pipe: null },
    list: {
      listQuantity: null,
      list: null,
    },
    fix: { fixQuantity: null, fix: null },
  },
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state, action: PayloadAction<CalculatePayloadType>) => {
      const { material, pipe, durability, length, width } = action.payload.data

      const step = durability.step
      const pipeWidth = pipe.width
      const listWidth = material.width
      const listMaterial = material.material

      const fixConfigs = state.config.filter(c => c.type === 'fix')

      state.result.pipe.pipeRunnigMeter = getPipeRunnigMeter(length, width, step, pipeWidth)
      state.result.pipe.pipe = pipe

      state.result.list.listQuantity = getListQuantity(length, width, listWidth)
      state.result.list.list = material

      const fixQuantity = getFixQuantity(listMaterial, fixConfigs, width, length)

      if (!fixQuantity) throw new Error('fixQuantity not found')
      state.result.fix.fixQuantity = fixQuantity

      const fix = state.data.find(el => el.type === 'fix')

      if (!fix) throw new Error('fix not found')
      state.result.fix.fix = fix

      console.log(current(state))
    },
  },
})

export const { reducer: calculatorReducer, actions: calculatorActions } = calculatorSlice
