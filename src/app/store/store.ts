import { configureStore } from '@reduxjs/toolkit'

import { calculatorReducer } from '../../calculator/slice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
