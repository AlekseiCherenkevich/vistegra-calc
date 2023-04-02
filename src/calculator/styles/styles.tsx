import styled from 'styled-components'

export const SCalculatorWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: coral;
`

export const SCalculatorSection = styled.section`
  max-width: 100%;
  width: fit-content;
  background-color: cornflowerblue;
`

export const SSelectWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: mediumvioletred;
  label {
    display: block;
    width: 100px;
    background-color: midnightblue;
  }
`
