/** @jsx jsx */
import React, { useContext } from "react"
import { jsx, css } from "@emotion/core"
import { AccessibilityContext } from "./accessContext"

function Container(props) {
  const theme = useContext(AccessibilityContext)
  const styles = css`
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    padding: 0 16px;
    ${props.flex && "display: flex;"}
    @media all and (min-width: 480px) {
      max-width: ${theme.containerWide ? "100%" : "480px"};
    }

    @media all and (min-width: 768px) {
      max-width: ${theme.containerWide ? "100%" : "736px"};
      padding: 4px;
    }
    @media all and (min-width: 992px) {
      ${theme.containerWide ? "100%" : "960px"};
    }
  `
  return <div css={styles}>{props.children}</div>
}

export default Container
