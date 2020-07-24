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

  const rulesURL = {
    orderAndChaos: "https://en.wikipedia.org/wiki/Order_and_Chaos",
  }
  return (
    <div className="App">
      <GridComponent gameMode={gameMode} />

      <p className="rulesUrl" onClick={() => window.open(rulesURL.orderAndChaos, "_blank")}>
        {"Order & Chaos rules"}
      </p>

      <button onClick={() => switchGameMode(gameMode, setGameMode)}>
        {gameMode === "Classic"
          ? "Switch to Order & Chaos"
          : "Switch to Classic"}
      </button>
    </div>
  )
}

export default App
