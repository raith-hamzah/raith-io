/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const styles = css`
  margin: 24px 0;
  background: white;
  border: 2px solid #eeee;
  padding: 24px;
  width: 100%;
  border-radius: 8px;
`

function Card(props) {
  return <section css={styles}>{props.children}</section>
}

export default Card
