import styled from 'styled-components'

export const SCalculatorWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SCalculatorSection = styled.section`
  margin-top: 30px;
  max-width: 100%;
  width: fit-content;
`

export const SSelectWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  label {
    display: block;
    width: 100px;
  }
`

export const SSelect = styled.div`
  border: 1px solid #ccc;
  width: 180px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fafafa;

  select {
    padding: 5px 8px;
    width: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
  }

  select:focus {
    outline: none;
  }
`
export const SInput = styled.input`
  border: 1px solid #ccc;
  width: 180px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fafafa;
  height: 26px;
  padding: 5px 8px;

  &:focus {
    outline: none;
  }
`
