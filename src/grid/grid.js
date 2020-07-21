import "./grid.css"

import React, { useEffect, useState } from "react"

import { checkWinner } from "../game/winner"
import { SquareComponent } from "../square/square"

export const GridComponent = ({ dimension = 3 }) => {
  const [turn, setTurn] = useState(0)
  const [gridValues, setGridValues] = useState(
    new Array(dimension).fill(null).map(() => new Array(dimension).fill(null))
  )
  useEffect(() => {
    if (turn > (dimension - 1) * 2) {
      checkWinner(gridValues)
    }
  }, [turn])

  const handleChange = (row, column) => {
    let value
    if (turn % 2 === 0) {
      // Player X
      value = 1
    } else {
      // Player O
      value = -1
    }
    let copy = [...gridValues]
    copy[row][column] = value
    setGridValues(copy)

    setTurn(turn + 1)
  }

  return (
    <div className="gameContainer">
      {gridValues.map((line, lineIndex) => (
        <div key={lineIndex} className="rowContainer">
          {line.map((_square, squareIndex) => (
            <SquareComponent
              key={lineIndex + "" + squareIndex}
              onPress={() => handleChange(lineIndex, squareIndex)}
              value={gridValues[lineIndex][squareIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
