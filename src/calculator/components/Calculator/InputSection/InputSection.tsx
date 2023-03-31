import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useDurability, useMaterial, usePipe, useSize } from '../../../hooks'
import { configSelector, dataSelector } from '../../../selectors'
import { calculatorActions } from '../../../slice'
import { SCalculatorSection } from '../../../styles'

import { LengthInput, WidthInput } from './Input'
import { DurabilitySelect, MaterialSelect, PipeSelect } from './Select'

export const InputSection = () => {
  const data = useSelector(dataSelector)
  const config = useSelector(configSelector)

  const dispatch = useDispatch()

  const { material, materials, changeMaterial } = useMaterial(data)
  const { pipe, pipes, changePipe } = usePipe(data)
  const { durability, durabilities, changeDurability } = useDurability(config)

  const { value: length, changeValue: changeLength } = useSize(config, 'length')
  const { value: width, changeValue: changeWidth } = useSize(config, 'width')

  console.log({ data, config })

  const calculate = () => {
    const payload = { data: { material, pipe, durability, length, width } }

    console.log('calc')
    if (!width && !length) return

    dispatch(calculatorActions.calculate(payload))
  }

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
      <button onClick={calculate}>calculate</button>
    </SCalculatorSection>
  )
}
