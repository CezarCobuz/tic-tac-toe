import "./grid.css"

import React, { useEffect, useState } from "react"

import { CellComponent } from "../cell/cell"
import { handleChange } from "../game/rules"
import { SymbolSelector } from "../variations/order-and-chaos/symbol-selector"

export const GridComponent = ({ gameMode = "Classic" }) => {
  const dimension = gameMode === "Order & Chaos" ? 6 : 3

  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(null)
  const [gridValues, setGridValues] = useState(
    new Array(dimension).fill(0).map(() => new Array(dimension).fill(0))
  )

  useEffect(() => {
    setGridValues(
      new Array(dimension).fill(0).map(() => new Array(dimension).fill(0))
    )
  }, [dimension])

  return (
    <div>
      {winner && (
        <div className="winnerMessageContainer">
          <p className="winnerMessage">{winner} wins!</p>
        </div>
      )}
      <div className="gameContainer">
        {gridValues.map((line, lineIndex) => (
          <div key={lineIndex} className="rowContainer">
            {line.map((_square, columnIndex) => (
              <CellComponent
                key={lineIndex + "" + columnIndex}
                onPress={() =>
                  handleChange(
                    gameMode,
                    lineIndex,
                    columnIndex,
                    turn,
                    setTurn,
                    gridValues,
                    setGridValues,
                    setWinner
                  )
                }
                value={gridValues[lineIndex][columnIndex]}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Game mode: Order & Chaos */}
      {gameMode === "Order & Chaos" && (
        <SymbolSelector
          player={turn % 2 === 0 ? "Order" : "Chaos"}
        />
      )}
    </div>
  )
}
