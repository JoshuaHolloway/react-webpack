import "./styles/main.scss"
import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

function App() {
  return <div>REACT BITCH!</div>
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
