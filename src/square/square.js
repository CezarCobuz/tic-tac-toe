import "./square.css"

import React, { useState } from "react"

export const SquareComponent = ({ value, onPress = () => {} }) => {
  console.log("+++ value", value)

  return (
    <div
      key={value}
      className="wrapper"
      onClick={value === null ? () => onPress() : () => {}}
    >
      {value && <p> {value}</p>}
    </div>
  )
}
