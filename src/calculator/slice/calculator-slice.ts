import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {},
  reducers: {
    calculate: state => state,
  },
})

export const calculatorReducer = calculatorSlice.reducer
