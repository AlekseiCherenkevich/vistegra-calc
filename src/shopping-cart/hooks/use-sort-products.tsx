import { MouseEvent, useState, useCallback, useMemo } from 'react'

import { ResultItem } from '../../calculator'
import { SortType } from '../models'

export const useSortProducts = (products: ResultItem[]) => {
  const [sort, setSort] = useState<SortType>({ ceil: '', sort: 'asc' })

  const changeSort = useCallback(
    (e: MouseEvent<HTMLTableHeaderCellElement>) => {
      const value = e.currentTarget.id

      if (!value) throw new Error('mouse event error')

      setSort(prevState => {
        if (prevState.ceil !== value) return { ceil: value, sort: 'asc' }

        return prevState.sort === 'asc'
          ? { ceil: prevState.ceil, sort: 'desc' }
          : { ceil: prevState.ceil, sort: 'asc' }
      })
    },
    [setSort, sort]
  )

  let sortedProducts = [...products]

  useMemo(() => {
    if (sort.ceil === 'name') {
      sort.sort === 'asc'
        ? sortedProducts.sort((a, b) => {
            if (!a.item || !b.item) throw new Error('product not found')

            return a.item.name.localeCompare(b.item!.name)
          })
        : sortedProducts.sort((a, b) => {
            if (!a.item || !b.item) throw new Error('item not found')

            return b.item.name.localeCompare(a.item!.name)
          })
    }

    if (sort.ceil === 'quantity') {
      sort.sort === 'asc'
        ? sortedProducts.sort((a, b) => {
            if (!a.quantity || !b.quantity) throw new Error('quantity not found')

            return a.quantity - b.quantity
          })
        : sortedProducts.sort((a, b) => {
            if (!a.quantity || !b.quantity) throw new Error('quantity not found')

            return b.quantity - a.quantity
          })
    }

    if (sort.ceil === 'totalPrice') {
      sort.sort === 'asc'
        ? sortedProducts.sort((a, b) => {
            return a.totalPrice - b.totalPrice
          })
        : sortedProducts.sort((a, b) => {
            return b.totalPrice - a.totalPrice
          })
    }
  }, [sort])

  return { sortedProducts, changeSort, sort }
}
