/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

function AccessButton(props) {
  const styles = css`
    border: none;
    width: 1.6em;
    height: 1.6em;
    font-size: 1.6em;
    border-radius: 4px;
    margin: 0 4px;
    cursor: pointer;

    &:hover {
      background: #fcff00;
    }
    &:focus {
      outline: 4px solid #fcff00;
      background: black;
      color: #fcff00;
    }
  `
  return (
    <button type='submit' {...props} css={styles}>
      {props.children}
    </button>
  )
}

export default AccessButton
