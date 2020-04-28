/** @jsx jsx */
import React, { useContext } from "react"
import { jsx, css } from "@emotion/core"
import AccessButton from "./accessButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEye,
  faExpandWide,
  faCompressWide,
  faTextWidth,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/pro-solid-svg-icons"
import Container from "./container"
import { AccessibilityContext } from "./accessContext"

const styles = css`
  background: black;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 8px;
`
function AccessBar(props) {
  const theme = useContext(AccessibilityContext)
  function update(e, fn) {
    e.preventDefault()
    return fn
  }
  return (
    <div css={styles}>
      <Container>
        <form>
          <AccessButton
            onClick={e => update(e, theme.setHighContrast)(!theme.highContrast)}
          >
            <FontAwesomeIcon icon={faEye} />
          </AccessButton>
          <AccessButton onClick={e => update(e, theme.setContainerWide)(true)}>
            <FontAwesomeIcon icon={faExpandWide} />
          </AccessButton>
          <AccessButton onClick={e => update(e, theme.setContainerWide)(false)}>
            <FontAwesomeIcon icon={faCompressWide} />
          </AccessButton>
          <AccessButton
            onClick={e => update(e, theme.setFontSize)(theme.fontSize - 0.2)}
          >
            <FontAwesomeIcon icon={faSearchMinus} />
          </AccessButton>
          <AccessButton
            onClick={e => update(e, theme.setFontSize)(theme.fontSize + 0.2)}
          >
            <FontAwesomeIcon icon={faSearchPlus} />
          </AccessButton>
          <AccessButton>
            <FontAwesomeIcon icon={faTextWidth} />
          </AccessButton>
        </form>
      </Container>
    </div>
  )
}

export default AccessBar
