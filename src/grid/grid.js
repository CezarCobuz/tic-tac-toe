import "./grid.css"

import React, { useState } from "react"

import { SquareComponent } from "../square/square"

export const GridComponent = ({ dimension = 3 }) => {
  const [turn, setTurn] = useState("X")
  const [gridValues, setGridValues] = useState(
    new Array(dimension).fill(null).map(() => new Array(dimension).fill(null))
  )

  const handleChange = (row, column, value) => {
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
              onPress={() => handleChange(lineIndex, squareIndex, 0)}
              value={gridValues[lineIndex][squareIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
