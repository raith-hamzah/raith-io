/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

const styles = css`
  border: none;
  width: 1.6em;
  height: 1.6em;
  font-size: 1.6em;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer-events;

  &:hover {
    background: yellow;
  }
  &:focus {
    outline: 4px solid #fcff00;
    background: black;
    color: #fcff00;
  }
`

function AccessButton(props) {
  return (
    <button {...props} css={styles}>
      {props.children}
    </button>
  )
}

export default AccessButton
