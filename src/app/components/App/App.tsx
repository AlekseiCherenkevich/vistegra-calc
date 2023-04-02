import React from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Calculator } from '../../../calculator'
import { ShoppingCart } from '../../../shopping-cart'

import { Layout } from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<Layout />}>
      <Route index element={<Calculator />} />
      <Route path={'shopping-cart'} element={<ShoppingCart />} />
    </Route>
  )
)

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
