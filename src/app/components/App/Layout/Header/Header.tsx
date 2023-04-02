import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { SContainer, SHeader, SHeaderItem } from '../../../../styles'

export const Header = () => {
  const location = useLocation()

  const link =
    location.pathname === '/shopping-cart' ? (
      <NavLink to={'/'}>Расчет материалов</NavLink>
    ) : (
      <NavLink to={'shopping-cart'}>Корзина покупок</NavLink>
    )

  return (
    <SHeader>
      <SContainer>
        <SHeaderItem>logo</SHeaderItem>
        <SHeaderItem>{link}</SHeaderItem>
      </SContainer>
    </SHeader>
  )
}
