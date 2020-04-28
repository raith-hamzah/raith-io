/** @jsx jsx */
import React from "react"
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
import Container from "./coontainer"

const styles = css`
  background: black;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 8px;
`
function AccessBar(props) {
  return (
    <div css={styles}>
      <Container>
        <AccessButton>
          <FontAwesomeIcon icon={faEye} />
        </AccessButton>
        <AccessButton>
          <FontAwesomeIcon icon={faCompressWide} />
        </AccessButton>
        <AccessButton>
          <FontAwesomeIcon icon={faExpandWide} />
        </AccessButton>
        <AccessButton>
          <FontAwesomeIcon icon={faSearchMinus} />
        </AccessButton>
        <AccessButton>
          <FontAwesomeIcon icon={faSearchPlus} />
        </AccessButton>
        <AccessButton>
          <FontAwesomeIcon icon={faTextWidth} />
        </AccessButton>
      </Container>
    </div>
  )
}

export default AccessBar
