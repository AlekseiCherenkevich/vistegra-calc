export const getListQuantity = (length?: number, width?: number, listWidthl?: number) => {
  if (!length || !width || !listWidthl) throw new Error('length, width or material not found')

  console.log(listWidthl)

  let longitudinalLayout = Math.ceil(length) * Math.ceil(width / listWidthl!)
  let transverseLayout = Math.ceil(width) * Math.ceil(length / listWidthl!)

  // Проверяес раскладку листов, выбираем ту, где расход меньше
  return longitudinalLayout >= transverseLayout ? transverseLayout : longitudinalLayout
}
