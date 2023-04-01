import { configureStore } from '@reduxjs/toolkit'

import { calculatorReducer } from '../../calculator'
import { shoppingCardReducer } from '../../shopping-cart'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    shoppingCard: shoppingCardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
