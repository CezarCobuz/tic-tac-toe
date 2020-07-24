import "./symbol-selector.item.css"

import React from "react"

export const SymbolSelectorItem = ({
  value,
  isSelected = false,
  onPress = () => {},
}) => {
  // TODO: variables color -> red for chaos, green for order?
  return (
    <div
      className={`selectorItemWrapper ${
        isSelected ? "selectedSelectorItem" : null
      }`}
      onClick={() => onPress()}
    >
      <p
        className={`symbolSelectorItemText ${
          isSelected ? 'selectedSelectorItemText' : null
        }`}
      >
        {value}
      </p>
    </div>
  )
}
