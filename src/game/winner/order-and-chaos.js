export const checkWinnerOrderAndChaos = (
  gridValues,
  turn,
  x,
  y,
  dimension,
  setWinner
) => {
  console.log("+++ gridValues", gridValues)
  let counterSameSymbol
  // setWinner('Chaos')

  // TODO: Generalize bellow for(s) into a generic function that takes start, stop?

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

  // ==========================================
  // Diagonals - main: top left to bottom right
  // ==========================================
  const startingDiagonals = [
    {
      x: 0,
      y: 0,
      // TODO: also stop needed
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 0,
    },
  ]

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
    parserX < dimension - 2 && parserY > 1; // start + 1 where start = 0
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
}
