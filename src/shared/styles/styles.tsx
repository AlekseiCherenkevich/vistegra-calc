import { motion } from 'framer-motion'
import styled from 'styled-components'

import { SShoppingCartTable } from '../../shopping-cart'

export const Title = styled.h1`
  text-align: center;
`

export const SCalculatorResultTable = styled(SShoppingCartTable)`
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    tbody tr td {
      height: 55px;
      font-size: 14px;
    }

    tbody tr td:before {
      width: 100px;
      height: 100%;
    }

    tbody tr td:nth-child(5) {
      display: none;
    }
  }
`

export const SButton = styled(motion.button)`
  margin-top: 10px;
  width: 180px;
  height: 40px;
  border-color: var(--lightgray);
  background-color: var(--lightgray);
  color: white;
  cursor: pointer;
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

export const SSortArrows = styled.img`
  position: relative;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transform: translateY(4px);
`
