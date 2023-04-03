import { createSlice, current, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { config, data } from '../data'
import { CalculatePayloadType, InitialStateType } from '../models'
import { getFixQuantity, getPipeRunnigMeter, getListQuantity, roundNumber } from '../utils'

const initialState: InitialStateType = {
  data,
  config,
  result: [],
  ceil: {
    length: null,
    width: null,
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

      state.result = []

      const fixConfigs = state.config.filter(c => c.type === 'fix')

      const { pipeLength, ceil } = getPipeRunnigMeter(length, width, step, pipeWidth)
      const pipeTotalPrice = roundNumber(pipeLength * pipe.price)

      state.result.push({
        id: nanoid(),
        item: pipe,
        quantity: pipeLength,
        totalPrice: pipeTotalPrice,
      })

      state.ceil = ceil

      const listQuantity = getListQuantity(length, width, listWidth)
      const listTotalPrice = roundNumber(listQuantity * material.price)

      state.result.push({
        id: nanoid(),
        item: material,
        quantity: listQuantity,
        totalPrice: listTotalPrice,
      })

      const fixQuantity = getFixQuantity(listMaterial, fixConfigs, width, length)
      const fix = state.data.find(el => el.type === 'fix')

      if (!fixQuantity || !fix) throw new Error('fixQuantity or fix not found')

      const fixTotalPrice = roundNumber(fixQuantity * fix.price)

      state.result.push({
        id: nanoid(),
        item: fix,
        quantity: fixQuantity,
        totalPrice: fixTotalPrice,
      })
      console.log(current(state))
    },
  },
})

export const { reducer: calculatorReducer, actions: calculatorActions } = calculatorSlice
