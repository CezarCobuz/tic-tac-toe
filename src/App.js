import "./App.css"

import React, { useState } from "react"

import { GridComponent } from "./grid/grid"

const switchGameMode = (currentGameMode, setter) => {
  if (currentGameMode === "Classic") {
    setter("Order & Chaos")
  } else {
    setter("Classic")
  }
}

const App = () => {
  const [gameMode, setGameMode] = useState("Order & Chaos")

  console.log("+++ gameMode", gameMode)

  return (
    <div className="App">
      <button onClick={() => switchGameMode(gameMode, setGameMode)}>
        {gameMode === "Classic"
          ? "Switch to Order & Chaos"
          : "Switch to Classic"}
      </button>

      <GridComponent gameMode={gameMode} />
    </div>
  )
}

export default App
