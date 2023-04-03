import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { AnimatedButton } from '../../../../shared'
import { useDurability, useMaterial, usePipe, useSize } from '../../../hooks'
import { useToggleResultModes } from '../../../hooks/use-toggle-result-modes'
import { configSelector, dataSelector } from '../../../selectors'
import { calculatorActions } from '../../../slice'
import { SCalculatorSection, SCalculatorWrapper } from '../../../styles'

import { LengthInput, WidthInput } from './Input'
import { ResultSection } from './ResultSection'
import { DurabilitySelect, MaterialSelect, PipeSelect } from './Select'

export const CalculatorContent = () => {
  const data = useSelector(dataSelector)
  const config = useSelector(configSelector)

  const dispatch = useDispatch()

  const { material, materials, changeMaterial } = useMaterial(data)
  const { pipe, pipes, changePipe } = usePipe(data)
  const { durability, durabilities, changeDurability } = useDurability(config)

  const { value: length, changeValue: changeLength, error: lengthError } = useSize(config, 'length')
  const { value: width, changeValue: changeWidth, error: widthError } = useSize(config, 'width')

  const { isHiddenResult, showResult } = useToggleResultModes(
    material,
    pipe,
    durability,
    length,
    width
  )

  const calculate = () => {
    const payload = { data: { material, pipe, durability, length, width, lengthError, widthError } }

    if (!width || !length) throw new Error('width or length not found')

    if (lengthError || widthError) return

    dispatch(calculatorActions.calculate(payload))
    showResult()
  }

  const resultSection = isHiddenResult ? (
    <AnimatedButton calculate={calculate}>Рассчитать</AnimatedButton>
  ) : (
    <ResultSection />
  )

  return (
    <SCalculatorWrapper>
      <SCalculatorSection>
        <MaterialSelect material={material} materials={materials} changeMaterial={changeMaterial} />
        <PipeSelect pipe={pipe} pipes={pipes} changePipe={changePipe} />
        <LengthInput length={length} changeLength={changeLength} error={lengthError} />
        <WidthInput width={width} changeWidth={changeWidth} error={widthError} />
        <DurabilitySelect
          durability={durability}
          durabilities={durabilities}
          changeDurability={changeDurability}
        />
      </SCalculatorSection>

      {resultSection}
    </SCalculatorWrapper>
  )
}
