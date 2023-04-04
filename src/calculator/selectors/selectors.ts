import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

export const calculatorSelector = (state: RootState) => state.calculator

export const dataSelector = createSelector(calculatorSelector, state => state.data)

export const configSelector = createSelector(calculatorSelector, state => state.config)

export const resultSelector = createSelector(calculatorSelector, state => state.result)

export const ceilSelector = createSelector(calculatorSelector, state => state.ceil)

export const squareSelector = createSelector(calculatorSelector, state => state.square)
