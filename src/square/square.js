import "./square.css"

import React, { useState } from "react"

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

export const SquareComponent = ({ value, onPress = () => {} }) => {
  return (
    <div
      key={value}
      className={`wrapper ${value !== 0 ? "" : "wrapperHovered"}`}
      onClick={value === 0 ? () => onPress() : () => {}}
    >
      {value !== 0 && <p> {translateToXO(value)}</p>}
    </div>
  )
}
