/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

const styles = css`
  width: 100%;
  margin: auto;
  @media all and (min-width: 480px) {
    max-width: 480px;
  }

  @media all and (min-width: 768px) {
    max-width: 736px;
  }
  @media all and (min-width: 992px) {
    max-width: 960px;
  }
`

function Container(props) {
  return <div css={styles}>{props.children}</div>
}

export default Container
