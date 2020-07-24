import { checkWinnerClassic } from "./winner/classic"
import { checkWinnerOrderAndChaos } from "./winner/order-and-chaos"

/** TODO: ADD @param Game mode */
export const handleChange = (
  gameMode,
  x,
  y,
  turn,
  setTurn,
  gridValues,
  setGridValues,
  setWinner,
  selectedSymbol = null
) => {
  const dimension = gridValues.length

  let value

  // This does not apply for Order & Chaos -> recycle only for changing the color
  // TODO: Refactor bellow condition + values so it applies to Order & Chaos (just put the X / O value) and check consecutive

  if (gameMode === "Classic") {
    if (turn % 2 === 0) {
      // Player X
      value = "X"
    } else {
      // Player O
      value = "O"
    }
  }

  if (gameMode === "Order & Chaos") {
    value = selectedSymbol
  }

  let copyGridValues = [...gridValues]
  copyGridValues[x][y] = {
    value: value,
    color: turn % 2 === 0 ? "default" : "contrast",
  }

  setGridValues(copyGridValues)
  setTurn(turn + 1)

  if (gameMode === "Classic") {
    checkWinnerClassic(gridValues, turn, x, y, dimension, setWinner)
  }

  if (gameMode === "Order & Chaos") {
    checkWinnerOrderAndChaos(gridValues, turn, x, y, dimension, setWinner)
  }
}
