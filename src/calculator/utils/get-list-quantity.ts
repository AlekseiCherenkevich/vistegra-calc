export const getListQuantity = (length?: number, width?: number, listWidth?: number) => {
  if (!length || !width || !listWidth) throw new Error('length, width or material not found')

  let longitudinalLayout = Math.ceil(length) * Math.ceil(width / listWidth!)

  let transverseLayout = Math.ceil(width) * Math.ceil(length / listWidth!)

  // Проверяем раскладку листов, выбираем ту, где расход меньше
  const listQuantity =
    longitudinalLayout >= transverseLayout ? transverseLayout : longitudinalLayout

  return Math.ceil(listQuantity) * listWidth
}
