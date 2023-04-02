import React from 'react'

import { Outlet } from 'react-router-dom'

import { SContainer } from '../../../styles'

import { Header } from './Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <SContainer>
        <Outlet />
      </SContainer>
    </>
  )
}
