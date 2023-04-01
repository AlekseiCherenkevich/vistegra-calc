import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ResultItem } from '../../calculator'

type InitialStateType = {
  products: ResultItem[]
}

const initialState: InitialStateType = {
  products: [],
}

export const shoppingCardSlice = createSlice({
  name: 'shoppingCard',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: ResultItem }>) => {
      const product = action.payload.product

      state.products.push(product)
    },
    removeProduct: () => {},
  },
})

export const { actions: shoppingCardActions, reducer: shoppingCardReducer } = shoppingCardSlice
