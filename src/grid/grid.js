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

  /** For Order and Chaos */
  const [selectedSymbol, setSelectedSymbol] = useState("X")

  useEffect(() => {
    // Resetters
    setGridValues(
      new Array(dimension)
        .fill({ value: 0, color: "default" })
        .map(() => new Array(dimension).fill({ value: 0, color: "default" }))
    )
    setTurn(0)
    setWinner(null)
    // TODO: Game mode rather than dimension, as dimension can be the same but game mode change
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
                valueColor={gridValues[lineIndex][columnIndex].color}
                onPress={() =>
                  handleChange(
                    gameMode,
                    lineIndex,
                    columnIndex,
                    turn,
                    setTurn,
                    gridValues,
                    setGridValues,
                    setWinner,
                    selectedSymbol
                  )
                }
                value={gridValues[lineIndex][columnIndex].value}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Game mode: Order & Chaos */}
      {gameMode === "Order & Chaos" && (
        <SymbolSelector
          player={turn % 2 === 0 ? "Order" : "Chaos"}
          selectedValue={selectedSymbol}
          setSelectedValue={setSelectedSymbol}
        />
      )}
    </div>
  )
}
