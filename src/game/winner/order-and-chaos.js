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

  const lastPositionPlayer = {
    x,
    y,
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
}
