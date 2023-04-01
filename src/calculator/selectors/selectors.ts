import { RootState } from '../../app/store'

export const dataSelector = (state: RootState) => state.calculator.data
export const configSelector = (state: RootState) => state.calculator.config
export const pipeSelector = (state: RootState) => state.calculator.result.pipe
export const fixSelector = (state: RootState) => state.calculator.result.fix
export const listSelector = (state: RootState) => state.calculator.result.list
