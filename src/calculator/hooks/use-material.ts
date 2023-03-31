import { ChangeEvent, useState } from 'react'

import { DataType } from '../models'

export const useMaterial = (data: DataType[]) => {
  const materials = data.filter((el: DataType) => el.type === 'list')

  const initName = materials[0].name

  const [materialName, setMaterial] = useState(initName)

  const changeMaterial = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value

    setMaterial(value)
  }

  const material = materials.find(m => m.name === materialName)

  if (!material) throw new Error('material not found')

  return { material, materials, changeMaterial }
}
