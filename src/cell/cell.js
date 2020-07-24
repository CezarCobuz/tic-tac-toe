import "./cell.css"

import React from "react"

import { useWindowDimensions } from "../utils/dimensions"

export const CellComponent = ({
  value,
  onPress = () => {},
  valueColor = "default",
}) => {
  // TODO: Apply responsive window on parent and all flex: 1 here
  return (
    <div
      key={value}
      className={`wrapper ${value !== 0 ? null : "wrapperHovered"}`}
      onClick={value === 0 ? () => onPress() : () => {}}
    >
      {value !== 0 && (
        <p
          className={`symbol ${
            valueColor === "contrast" ? "symbolContrast" : ""
          }`}
        >
          {value}
        </p>
      )}
    </div>
  )
}
