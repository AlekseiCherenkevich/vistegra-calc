import React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { useDurability, useMaterial, usePipe, useSize } from '../../../hooks'
import { SCalculatorSection } from '../../../styles'

import { LengthInput, WidthInput } from './Input'
import { DurabilitySelect, MaterialSelect, PipeSelect } from './Select'
const dataSelector = (state: RootState) => state.calculator.data
const configSelector = (state: RootState) => state.calculator.config

export const InputSection = () => {
  const data = useSelector(dataSelector)
  const config = useSelector(configSelector)

  const { material, materials, changeMaterial } = useMaterial(data)
  const { pipe, pipes, changePipe } = usePipe(data)
  const { durability, durabilities, changeDurability } = useDurability(config)

  const { value: length, changeValue: changeLength } = useSize(config, 'length')
  const { value: width, changeValue: changeWidth } = useSize(config, 'width')

  console.log({ data, config })

  return (
    <SCalculatorSection>
      <MaterialSelect material={material} materials={materials} changeMaterial={changeMaterial} />
      <PipeSelect pipe={pipe} pipes={pipes} changePipe={changePipe} />
      <LengthInput length={length} changeLength={changeLength} />
      <WidthInput width={width} changeWidth={changeWidth} />
      <DurabilitySelect
        durability={durability}
        durabilities={durabilities}
        changeDurability={changeDurability}
      />
    </SCalculatorSection>
  )
}
