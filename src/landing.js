/** @jsx jsx */
import React, { useContext } from "react"
import { jsx, css, Global } from "@emotion/core"
import Container from "./container"
import image from "./images/headshot.jpg"
import { AccessibilityContext } from "./accessContext"
import AccessButton from "./accessButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const imageStyles = css`
  margin-top: 24px;
  border-radius: 24px;
  box-sizing: border-box;
  max-width: 100%;
`
function Landing(props) {
  const theme = useContext(AccessibilityContext)

  const styles = css`
    ${theme.highContrast
      ? `background-color: #fcff00`
      : `background: linear-gradient(
      90deg,
      rgba(111, 0, 185, 1) 0%,
      rgba(185, 20, 20, 1) 50%,
      rgba(200, 117, 0, 1) 100%
    )`};

    color: ${theme.highContrast ? "black" : "white"};
    font-family: Avenir, Arial, Helvetica, sans-serif;
    margin-bottom: 24px;
    h1 {
      text-align: center;
      text-shadow: 3px 3px ${theme.highContrast ? "transparent " : "black"};
      margin: 0;
    }
  `
  const anchorHeadingStyles = css`
    display: inline-block;
    color: inherit;
    font-size: 2em;
    text-decoration: none;
    border-radius: 4px;
    padding: 4px;
    &:focus {
      background: ${theme.highContrast ? "#fcff00" : "black"};
      color: ${theme.highContrast ? "black" : "#fcff00"};
      outline: 4px solid ${theme.highContrast ? "transparent" : "#fcff00"};
    }
  `
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            zoom: ${theme.fontSize};
            color: ${theme.highContrast ? "#fcff00" : "black"};
            background: ${theme.highContrast ? "black" : "white"};
            font-family: Avenir, Arial, Helvetica, sans-serif;
            p,
            li {
              font-size: 18px;
            }
          }
        `}
      />
      <div css={styles}>
        <h1>Raith Hamzah | Software Engineer</h1>
      </div>
      <Container>
        <div>
          <a css={anchorHeadingStyles} href='#about'>
            About me
          </a>

          <p>
            Frontend Engineer with 4+ years of work experience. I like writing
            clean, stable, functional code that tests easy, scales, and meets UX
            requirements. I have most of my experience as a React and NodeJS
            developer, but I have worked professionaly with PHP, Java, C# and a
            myriad of other technologies. I'm a staunch advocate for
            accessibility in web apps and try to bring good accessibility habits
            to every project I work on. Play with the accessibility bar at the
            top to see some accessiibility helpers.
          </p>
        </div>
        <a css={anchorHeadingStyles} href='#skills'>
          Programming Skills
        </a>
        <ul>
          <li>
            Languages: Javascript (Typescript, NodeJS, Flow), Python, PHP, Java,
            C#
          </li>
          <li>Frameworks: React (Redux, Apollo, MobX), Angular, Vue</li>
          <li>
            Libraries: Reactive Extensions (Rx), Underscore, Ramda, Sanctuary
          </li>
        </ul>
        <a css={anchorHeadingStyles} href='#links'>
          Reach out to me
        </a>
        <div
          css={css`
            display: flex;
            a {
              color: ${theme.highContrast ? "white" : "black"};
              font-size: 3em;
              padding: 4px;
              width: fit-content;
            }
            a:focus {
              color: ${theme.highContrast ? "#fcff00" : "black"};
              outline: 2px solid ${theme.highContrast ? "#fcff00" : "black"};
            }
          `}
        >
          <a href='https://www.facebook.com/raith.hamzah'>
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
          <a href='https://www.linkedin.com/in/raith'>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a href='https://twitter.com/raith.hamzah'>
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
        </div>
        <img css={imageStyles} src={image} alt="Raith Hamzah's Headshot" />
      </Container>
    </React.Fragment>
  )
}

export default Landing
