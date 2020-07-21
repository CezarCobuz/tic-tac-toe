import "./grid.css"

import React, { useState } from "react"

import { SquareComponent } from "../square/square"

export const GridComponent = ({ dimension = 3 }) => {
  const [turn, setTurn] = useState(0)
  const [gridValues, setGridValues] = useState(
    new Array(dimension).fill(null).map(() => new Array(dimension).fill(null))
  )

  const handleChange = (row, column) => {
    let value
    if (turn % 2 === 0) {
      value = "X"
    } else {
      value = "O"
    }
    setTurn(turn + 1)
    let copy = [...gridValues]
    copy[row][column] = value
    setGridValues(copy)
  }

  console.log("+++ gridValues", gridValues)

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
