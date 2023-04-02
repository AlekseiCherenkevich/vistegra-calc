import styled from 'styled-components'

import { SShoppingCartTable } from '../../shopping-cart'

export const Title = styled.h1`
  text-align: center;
`

export const SCalculatorResultTable = styled(SShoppingCartTable)`
  margin-bottom: 20px;
`

export const SButton = styled.button`
  margin-top: 10px;
  width: 180px;
  height: 40px;
  border-color: var(--lightgray);
  background-color: var(--lightgray);
  color: white;
  &:hover {
    background-color: var(--gray);
    border-color: var(--gray);
  }
`

export const SButtonSmall = styled(SButton)`
  margin-top: 0;
  width: 100px;
  height: 25px;
`
