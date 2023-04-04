import React, { memo } from 'react'

import { motion } from 'framer-motion'

import { Title } from '../../../shared'

import { ShoppingCartTable } from './ShoppingCartTable'

export const ShoppingCart = memo(() => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Title>Корзина товаров</Title>
      <ShoppingCartTable />
    </motion.article>
  )
})
