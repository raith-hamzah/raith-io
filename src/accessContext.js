import React, { useState } from "react"

const AccessibilityContext = React.createContext()

export function AccessibilityProvider(props) {
  const [highContrast, setHighContrast] = useState(false)
  const [containerWide, setContainerWide] = useState(false)
  const [fontSize, setFontSize] = useState(1)
  const [textWide, setTextWide] = useState(false)

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        containerWide,
        fontSize,
        textWide,
        setContainerWide,
        setFontSize,
        setHighContrast,
        setTextWide,
      }}
    >
      {props.children}
    </AccessibilityContext.Provider>
  )
}

export { AccessibilityContext }
