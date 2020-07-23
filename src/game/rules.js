/** x, y last position filled */
const checkWinner = (gridValues, turn, x, y, dimension, setWinner) => {
  let sumHorizontal = 0
  let sumVertical = 0

  // TODO: use [1, 2, 3, 4].reduce((a, b) => a + b, 0)
  // sumHorizontal = gridValues[x].reduce((a, b) => a + b, 0)
  // sumVertical =

  for (let parser = 0; parser < dimension; parser++) {
    sumHorizontal += gridValues[x][parser]
    sumVertical += gridValues[parser][y]
  }

  /** Main diagonal */
  let sumMainDiagonal = 0
  if (x === y) {
    for (let parser = 0; parser < dimension; parser++) {
      sumMainDiagonal += gridValues[parser][parser]
    }
  }

  /** Secondary diagonal */
  let sumSecondaryDiagonal = 0
  if (x + y === dimension - 1) {
    for (let parser = 0; parser < dimension; parser++) {
      sumSecondaryDiagonal += gridValues[parser][dimension - 1 - parser]
    }
  }

  if (sumHorizontal === dimension || sumVertical === dimension) {
    setWinner("X")
  }
  if (sumHorizontal === -1 * dimension || sumVertical === -1 * dimension) {
    setWinner("O")
  }

  if (sumMainDiagonal === dimension || sumSecondaryDiagonal === dimension) {
    setWinner("X")
  }
  if (
    sumMainDiagonal === -1 * dimension ||
    sumSecondaryDiagonal === -1 * dimension
  ) {
    setWinner("O")
  }
}

export const handleChange = (
  x,
  y,
  turn,
  setTurn,
  gridValues,
  setGridValues,
  setWinner
) => {
  const dimension = gridValues.length

  let value
  if (turn % 2 === 0) {
    // Player X
    value = 1
  } else {
    // Player O
    value = -1
  }
  let copyGridValues = [...gridValues]
  copyGridValues[x][y] = value

  setGridValues(copyGridValues)
  setTurn(turn + 1)

  // TODO: remove true ||
  if (true || turn > (dimension - 1) * 2) {
    checkWinner(gridValues, turn, x, y, dimension, setWinner)
  }
}
