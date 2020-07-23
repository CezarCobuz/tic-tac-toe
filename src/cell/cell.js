import "./cell.css"

import React from "react"

import { useWindowDimensions } from "../utils/dimensions"

export const CellComponent = ({ value, onPress = () => {} }) => {
  const { height, width } = useWindowDimensions()

  return (
    <div
      key={value}
      className={`wrapper ${height < width ? "wrapperByHeight" : null} ${
        value !== 0 ? null : "wrapperHovered"
      }`}
      onClick={value === 0 ? () => onPress() : () => {}}
    >
      {value !== 0 && (
        <p className={`symbol ${value === -1 ? "symbolContrast" : ""}`}>
          {value}
        </p>
      )}
    </div>
  )
}
