import "./square.css"

import React, { useState } from "react"

// const handlePress = (position, turn, onPress) => {
//   console.log("+++ turn", turn)
  
//   console.log('+++ position', position)

//   if (turn === "X") {
//     onPress("O")
//   } else {
//     onPress("X")
//   }
// }

export const SquareComponent = ({value, onPress = () => {} }) => {

  // const [filled, setFilled] = useState(null)

  // TODO: why doesn't this rerender
  console.log('+++ value', value)

  return (
    <div
      key={value}
      className="wrapper"
      onClick={() => onPress()}
      // onClick={() => {
      //   handlePress(position, turn, onPress)
      //   setFilled(true)
      // }}
    >
      {value && <p> {value}</p>}
    </div>
  )
}
