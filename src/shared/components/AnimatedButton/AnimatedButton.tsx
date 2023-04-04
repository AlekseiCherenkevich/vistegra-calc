import React, { FC, ReactNode } from 'react'

import { SButton } from '../../styles'

type PropsType = {
  children: ReactNode
  calculate: () => void
}

export const AnimatedButton: FC<PropsType> = ({ calculate, children }) => (
  <SButton
    onClick={calculate}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </SButton>
)
