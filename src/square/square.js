import "./square.css"

import React, { useState } from "react"

export const SquareComponent = ({ value, onPress = () => {} }) => {

  return (
    <div
      key={value}
      className={`wrapper ${value !== null ? '' : 'wrapperHovered'}`}
      onClick={value === null ? () => onPress() : () => {}}
    >
      {value && <p> {value}</p>}
    </div>
  )
}
