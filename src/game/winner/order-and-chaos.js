export const checkWinnerOrderAndChaos = (
  gridValues,
  turn,
  x,
  y,
  dimension,
  setWinner
) => {
  let counterSameSymbol
  // setWinner('Chaos')

  // Vertical
  counterSameSymbol = 1
  for (let index = 0; index < dimension - 1; index++) {
    if (
      gridValues[x][index].value !== 0 &&
      gridValues[x][index].value === gridValues[x][index + 1].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  // Horizontal
  counterSameSymbol = 1
  for (let index = 0; index < dimension - 1; index++) {
    if (
      gridValues[index][y].value !== 0 &&
      gridValues[index][y].value === gridValues[index + 1][y].value
    ) {
      counterSameSymbol++
    }
  }

  if (counterSameSymbol === 5) {
    setWinner("Order")
  }

  console.log("+++ counterSameSymbol", counterSameSymbol)
}
