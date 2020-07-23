import "./cell.css"

import React, { useState } from "react"

import { useWindowDimensions } from "../utils/dimensions"

// TODO: Source of an image maybe or an animation
const translateToXO = (value) => {
  let translatedValue

  if (value === 1) {
    translatedValue = "X"
  } else {
    translatedValue = "O"
  }

  return translatedValue
}

export const CellComponent = ({ value, onPress = () => {} }) => {
  const { height, width } = useWindowDimensions()

  return (
    <div
      key={value}
      className={`wrapper ${height < width ? "wrapperByHeight" : null} ${value !== 0 ? null : "wrapperHovered"}`}
      onClick={value === 0 ? () => onPress() : () => {}}
    >
      {value !== 0 && (
        <p className={`symbol ${value === -1 ? "symbolContrast" : ""}`}>
          {" "}
          {translateToXO(value)}
        </p>
      )}
    </div>
  )
}
