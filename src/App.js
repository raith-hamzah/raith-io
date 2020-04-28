import React from "react"
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/pro-solid-svg-icons"
import AccessButton from "./accessButton"
import AccessBar from "./accessBar"
import Landing from "./landing"

function App() {
  return (
    <React.Fragment>
      <header>
        <AccessBar />
      </header>
      <main>
        <Landing />
      </main>
    </React.Fragment>
  )
}

export default App
