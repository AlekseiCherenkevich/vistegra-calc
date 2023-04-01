import { createSlice, current, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { config, data } from '../data'
import { CalculatePayloadType, InitialStateType } from '../models'
import { getFixQuantity, getPipeRunnigMeter, getListQuantity } from '../utils'

const initialState: InitialStateType = {
  data,
  config,
  result: [],
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

      const pipeRunnigMeter = getPipeRunnigMeter(length, width, step, pipeWidth)
      const pipeTotalPrice = pipeRunnigMeter * pipe.price

      state.result.push({
        id: nanoid(),
        item: pipe,
        quantity: pipeRunnigMeter,
        totalPrice: pipeTotalPrice,
      })

      const listQuantity = getListQuantity(length, width, listWidth)
      const listTotalPrice = listQuantity * material.price

      state.result.push({
        id: nanoid(),
        item: material,
        quantity: listQuantity,
        totalPrice: listTotalPrice,
      })

      const fixQuantity = getFixQuantity(listMaterial, fixConfigs, width, length)
      const fix = state.data.find(el => el.type === 'fix')

      if (!fixQuantity || !fix) throw new Error('fixQuantity or fix not found')

      const fixTotlaPrice = fixQuantity * fix.price

      state.result.push({
        id: nanoid(),
        item: fix,
        quantity: fixQuantity,
        totalPrice: fixTotlaPrice,
      })
      console.log(current(state))
    },
  },
})

export const { reducer: calculatorReducer, actions: calculatorActions } = calculatorSlice
