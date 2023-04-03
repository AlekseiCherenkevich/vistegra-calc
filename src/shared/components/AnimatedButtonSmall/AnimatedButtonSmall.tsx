import React, { FC, ReactNode, memo } from 'react'

import { SButtonSmall } from '../../styles'

type PropsType = {
  children: ReactNode
  callback: () => void
}
export const AnimatedButtonSmall: FC<PropsType> = memo(({ callback, children }) => {
  return (
    <SButtonSmall onClick={callback} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </SButtonSmall>
  )
})
