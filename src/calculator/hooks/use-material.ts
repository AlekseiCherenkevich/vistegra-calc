import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { DataType } from '../models'

export const useMaterial = (data: DataType[]) => {
  const materials = useMemo(() => {
    return data.filter((el: DataType) => el.type === 'list')
  }, [data])

  const initName = materials[0].name

  const [materialName, setMaterial] = useState(initName)

  const changeMaterial = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value

      setMaterial(value)
    },
    [setMaterial]
  )

  const material = useMemo(() => {
    return materials.find(m => m.name === materialName)
  }, [materialName])

  if (!material) throw new Error('material not found')

  return { material, materials, changeMaterial }
}
