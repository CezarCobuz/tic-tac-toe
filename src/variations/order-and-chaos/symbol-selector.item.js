import "./symbol-selector.item.css"

import React from "react"

export const SymbolSelectorItem = ({
  value,
  isSelected = false,
  onPress = () => {},
}) => {
  return (
    <div
      className={`selectorItemWrapper ${
        isSelected ? "selectedSelectorItem" : null
      }`}
      onClick={() => onPress()}
    >
      <p className="symbolSelectorItemText">{value}</p>
    </div>
  )
}
