import { ChangeEvent, useState } from 'react'

import { DataType } from '../slice'

export const useMaterial = (data: DataType[]) => {
  const materials = data.filter((el: DataType) => el.type === 'list')

  const initName = materials[0].name

  const [material, setMaterial] = useState(initName)

  const changeMaterial = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value

    setMaterial(value)
  }

  return { material, materials, changeMaterial }
}
