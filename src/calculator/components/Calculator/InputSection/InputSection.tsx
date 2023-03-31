import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { SCalculatorSection } from '../../../styles'

import { LengthInput, WidthInput } from './Input'
import { DurabilitySelect, MaterialSelect, PipeSelect } from './Select'

const dataSelector = (state: RootState) => state.calculator.data
const configSelector = (state: RootState) => state.calculator.config

export const InputSection = () => {
  const data = useSelector(dataSelector)
  const config = useSelector(configSelector)

  console.log({ data, config })

  return (
    <SCalculatorSection>
      <MaterialSelect data={data} />
      <PipeSelect data={data} />
      <LengthInput config={config} />
      <WidthInput config={config} />
      <DurabilitySelect config={config} />
    </SCalculatorSection>
  )
}
