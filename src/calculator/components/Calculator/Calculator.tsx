import React, { memo } from 'react'

import { motion } from 'framer-motion'

import { Title } from '../../../shared'

import { CalculatorContent } from './CalculatorContent'

export const Calculator = memo(() => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Title>Расчет материалов</Title>
      <CalculatorContent />
    </motion.article>
  )
})
