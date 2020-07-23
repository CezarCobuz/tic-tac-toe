export const checkWinnerOrderAndChaos = (
  gridValues,
  turn,
  x,
  y,
  dimension,
  setWinner
) => {
  const symbolPlaced = gridValues[x][y].value

  // setWinner('Chaos')

  // +1 twice gets to 1
  // TODO: Further investigate the overall checker
  let counterSameSymbol = -1
  // Vertical
  for (let index = y; index < dimension; index++) {
    if (gridValues[x][index].value === symbolPlaced) {
      counterSameSymbol++
    }
  }

  for (let index = y; index >= 0; index--) {
    if (gridValues[x][index].value === symbolPlaced) {
      counterSameSymbol++
    }
  }

  console.log("+++ counterSameSymbol", counterSameSymbol)

  if (counterSameSymbol === 5) {
    setWinner("TEST")
  }
}
