/** @jsx jsx */
import React, { useContext } from "react"
import "./App.css"
import AccessBar from "./accessBar"
import Landing from "./landing"
import { AccessibilityProvider, AccessibilityContext } from "./accessContext"
import { jsx, css, Global } from "@emotion/core"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

function App() {
  return (
    <AccessibilityProvider>
      <header>
        <AccessBar />
      </header>
      <main>
        <Landing />
      </main>
    </AccessibilityProvider>
  )
}

export default App
