import "./grid.css"

import React, { useState } from "react"

import { CellComponent } from "../cell/cell"
import { handleChange } from "../game/rules"

export const GridComponent = ({ dimension = 3 }) => {
  const [turn, setTurn] = useState(0)
  const [gridValues, setGridValues] = useState(
    new Array(dimension).fill(0).map(() => new Array(dimension).fill(0))
  )

  return (
    <div className="gameContainer">
      {gridValues.map((line, lineIndex) => (
        <div key={lineIndex} className="rowContainer">
          {line.map((_square, squareIndex) => (
            <CellComponent
              key={lineIndex + "" + squareIndex}
              onPress={() =>
                handleChange(
                  lineIndex,
                  squareIndex,
                  turn,
                  setTurn,
                  gridValues,
                  setGridValues
                )
              }
              value={gridValues[lineIndex][squareIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
