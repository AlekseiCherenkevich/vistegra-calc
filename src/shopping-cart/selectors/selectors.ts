import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export const shoppingCartSelector = (state: RootState) => state.shoppingCard

export const productsSelector = createSelector(shoppingCartSelector, state => state.products)
