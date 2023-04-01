import { RootState } from '../../app/store'

export const dataSelector = (state: RootState) => state.calculator.data

export const configSelector = (state: RootState) => state.calculator.config

export const resultSelector = (state: RootState) => state.calculator.result

export const ceilSelector = (state: RootState) => state.calculator.ceil
