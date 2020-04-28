/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import Container from "./coontainer"
import image from "./images/headshot.jpg"
import Card from "./card"

const styles = css`
  background: linear-gradient(
    90deg,
    rgba(111, 0, 185, 1) 0%,
    rgba(185, 20, 20, 1) 50%,
    rgba(200, 117, 0, 1) 100%
  );
  color: white;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  margin-bottom: 24px;
  h1 {
    text-align: center;
    text-shadow: 3px 3px black;
    font-size: 3em;
    margin: 0;
  }
`
const imageStyles = css`
  border-radius: 24px;
  max-width: 360px;
`
function Landing(props) {
  return (
    <React.Fragment>
      <div css={styles}>
        <Container>
          <h1>Raith Hamzah | Software Engineer</h1>
        </Container>
      </div>
      <Container>
        <img css={imageStyles} src={image} />
      </Container>
    </React.Fragment>
  )
}

export default Landing
