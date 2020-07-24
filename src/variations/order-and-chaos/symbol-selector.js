import "./symbol-selector.css"

import React from "react"

import { SymbolSelectorItem } from "./symbol-selector.item"

export const SymbolSelector = ({ player, selectedValue, setSelectedValue }) => {
  return (
    <div className={"symbolSelectorWrapper"}>
      <p
        className={`selectorTurnMessage ${
          player === "Chaos" ? "selectorTurnMessageContrast" : null
        }`}
      >
        {player} turn
      </p>
      <div className="selectorItems">
        <SymbolSelectorItem
          value="X"
          isSelected={"X" === selectedValue}
          onPress={() => setSelectedValue("X")}
        />
        <SymbolSelectorItem
          value="O"
          isSelected={"O" === selectedValue}
          onPress={() => setSelectedValue("O")}
        />
      </div>
    </div>
  )
}
