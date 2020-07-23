/** x, y last position filled */
export const checkWinnerClassic = (gridValues, turn, x, y, dimension, setWinner) => {
    let sumHorizontal = 0
    let sumVertical = 0
  
    // TODO: use [1, -1, 0, ... ].reduce((a, b) => a + b, 0)
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