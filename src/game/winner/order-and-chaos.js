import { getCheckerConfig } from "./order-and-chaos.config"

export const checkWinnerOrderAndChaos = (
  gridValues,
  turn,
  x,
  y,
  dimension,
  setWinner
) => {
  // TODO: setWinner('Chaos')

  // TODO: rename x: x is bad
  const lastPositionPlayer = {
    x: x,
    y: y,
  }
  const checkerConfig = getCheckerConfig(lastPositionPlayer)

  checkerConfig.forEach((singleConfig) => {
    let { start, stop, advance, condition } = singleConfig

    let counterConsecutiveSymbol = {
      X: 1,
      O: 1,
    }

    // Parse for singleConfig (row / col / diag / antiDiag etc.)
    for (
      let parserX = start.row, parserY = start.col;
      condition(parserX, parserY);
      parserX += advance.row, parserY += advance.col
    ) {
      if (gridValues[parserX][parserY].value !== 0) {
        let currentValue = gridValues[parserX][parserY].value
        let nextValue =
          gridValues[parserX + advance.row][parserY + advance.col].value

        if (currentValue === nextValue) {
          counterConsecutiveSymbol[currentValue]++
        }
      }
    }

    if (counterConsecutiveSymbol.X === 5 || counterConsecutiveSymbol.O === 5) {
      setWinner("Order")
    }
  })

  /** 
  // ==========================================
  // Diagonals - main: top left to bottom right
  // ==========================================

  counterSameSymbol = 1
  for (let index = 0; index < dimension - 1; index++) {
    if (
      gridValues[index][index].value !== 0 &&
      gridValues[index][index].value === gridValues[index + 1][index + 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // For a 6x6 grid:
  // 0, 1 start, stop: 4,5
  counterSameSymbol = 1
  for (
    let parserX = 0, parserY = 1;
    parserX < dimension - 2 && parserY < dimension - 1;
    parserX++, parserY++
  ) {
    if (
      gridValues[parserX][parserY].value !== 0 &&
      gridValues[parserX][parserY].value ===
        gridValues[parserX + 1][parserY + 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // 1, 0 start, stop: 5,4
  counterSameSymbol = 1
  for (
    let parserX = 1, parserY = 0;
    parserX < dimension - 1 && parserY < dimension - 2;
    parserX++, parserY++
  ) {
    if (
      gridValues[parserX][parserY].value !== 0 &&
      gridValues[parserX][parserY].value ===
        gridValues[parserX + 1][parserY + 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // ==========================================
  // Diagonals - anti: top right to bottom left
  // ==========================================

  // For a 6x6 grid:
  // 0, 5 start, stop: 5,0
  counterSameSymbol = 1
  for (
    let parserX = 0, parserY = dimension - 1;
    parserX < 5 && parserY > 0; // start + 1 where start = 0
    parserX++, parserY--
  ) {
    if (
      gridValues[parserX][parserY].value !== 0 &&
      gridValues[parserX][parserY].value ===
        gridValues[parserX + 1][parserY - 1].value // next
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // 0, 4 start, stop: 4,0
  counterSameSymbol = 1
  for (
    let parserX = 0, parserY = dimension - 2;
    parserX < 4 && parserY > 0;
    parserX++, parserY--
  ) {
    if (
      gridValues[parserX][parserY].value !== 0 &&
      gridValues[parserX][parserY].value ===
        gridValues[parserX + 1][parserY - 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // 1, 5 start, stop: 5,1
  counterSameSymbol = 1
  for (
    let parserX = 1, parserY = 5;
    parserX < 5 && parserY > 1;
    parserX++, parserY--
  ) {
    if (
      gridValues[parserX][parserY].value !== 0 &&
      gridValues[parserX][parserY].value ===
        gridValues[parserX + 1][parserY - 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }
  */
}
