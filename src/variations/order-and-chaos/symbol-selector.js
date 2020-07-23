import "./symbol-selector.css"

import React, { useState } from "react"

import { SymbolSelectorItem } from "./symbol-selector.item"

export const SymbolSelector = ({ player }) => {
  const [selectedValue, setSelectedValue] = useState(null)

  //   console.log('+++ selectedValue', selectedValue)
  return (
    <div className={"symbolSelectorWrapper"}>
      <p>{player} turn</p>
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
