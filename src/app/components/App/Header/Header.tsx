import React from 'react'

import { SContainer, SHeader, SHeaderItem } from '../../../styles'

export const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SHeaderItem>logo</SHeaderItem>
        <SHeaderItem>shopping cart</SHeaderItem>
      </SContainer>
    </SHeader>
  )
}
