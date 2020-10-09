import React, { useState } from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import Fade from "react-reveal/Fade"

import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Quote from "../components/quote"
import Projects from "../components/projects"
import Footer from "../components/footer"
import { dark, light } from "../components/theme"
import Bg from "../assets/bg.svg"
import palette from "../images/palette.svg"
import pencil from "../images/pencil.svg"

const App = () => {
  const [theme, setTheme] = useState("dark")

  // todo => persist user choice on return visit
  const setDarkTheme = () => setTheme("dark")
  const setLightTheme = () => setTheme("light")

  // check order of operations, rendering
  const styles = theme === "dark" ? dark : light

  return (
    <ThemeProvider theme={styles}>
      <Global
        styles={css`
          /* svg test */
          .b,
          .c,
          .d,
          .f,
          .g,
          .h,
          .i,
          .k,
          .l {
            fill: ${styles.colors.background};
            stroke: #f2d6a3;
          }
          .c,
          .l {
            opacity: 0.2;
          }
          .e {
            opacity: 0.5;
          }
          .h {
            fill: transparent;
            stroke-miterlimit: 10;
            stroke-width: 0.75px;
          }
          [data-colors="false"]:hover {
            cursor: url(${palette}) 10 10, pointer;
          }
          [data-colors="true"]:hover {
            cursor: url(${pencil}) 10 10, pointer;
          }
          [data-colors="true"] .b {
            fill: #f2d6a3;
            stroke: transparent;
          }
          [data-colors="true"] .c {
            fill: gray;
          }
          [data-colors="true"] .d {
            fill: #ffebf0;
            stroke: transparent;
          }
          [data-colors="true"] .f {
            fill: #fff;
            stroke: transparent;
          }
          [data-colors="true"] .g {
            fill: #ffd3dd;
            stroke: transparent;
          }
          [data-colors="true"] .i {
            fill: #d81e5b;
            stroke: transparent;
          }
          [data-colors="true"] .k {
            fill: #66b9cc;
            stroke: transparent;
          }
          [data-colors="true"] .l {
            fill: #4d4d4d;
            stroke: transparent;
            opacity: 1;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }

          ::selection {
            background: ${styles.colors.accent};
            color: ${styles.colors.backgroundAlt};
          }

          /* Scrollbar styles from Piccalilli's awesome 11ty course: https://piccalil.li/course/learn-eleventy-from-scratch/ */
          ::-webkit-scrollbar {
            height: 1rem;
          }

          ::-webkit-scrollbar-track {
            background-color: transparent;
            border: 1px solid ${styles.colors.accent};
            border-radius: 0.25rem;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${styles.colors.accent};
            border-radius: 0.25rem;
          }

          body,
          h1,
          h2,
          h3,
          ul,
          li {
            margin: 0;
          }

          ul {
            padding: 0;
            list-style: none;
          }

          body {
            background: ${styles.colors.background};
            color: ${styles.colors.main};
            font-family: "josefin sans";
            font-size: 18px;
            transition: background 0.2s, color 0.2s;
            line-height: 1.8;
          }

          /* from Scott O'Hara: https://css-tricks.com/inclusively-hidden/ */
          .visually-hidden {
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }

          .title {
            text-align: center;
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: lighter;
            line-height: 1;
            @media all and (min-width: 500px) {
              & {
                font-size: 2.5rem;
              }
            }
            @media all and (min-width: 1024px) {
              & {
                font-size: 3rem;
              }
              &:not(.title--center) {
                text-align: left;
              }
            }
          }

          .box {
            border: 1px solid ${styles.colors.main};
            background: ${styles.colors.background};
          }

          .wrapper {
            width: 100%;
            margin: 0 auto;
            @media all and (min-width: 500px) {
              width: 80%;
            }
          }

          .wrapper--large {
            max-width: 1000px;
          }

          .wrapper--small {
            max-width: 500px;
          }

          .loading {
            height: 100vh;
            overflow: hidden;
          }

          .splash {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            z-index: 10;
            background: ${styles.colors.backgroundAlt};
            color: ${styles.colors.accent};
            font-size: 20vh;
            transition: opacity 0.5s;
            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .loaded .splash {
            opacity: 0;
          }
        `}
      />
      <div className="splash">
        <span>MH</span>
      </div>
      <SEO title="Maureen Holland" />
      <Header />
      <Bg
        css={css`
          width: 100%;
          height: 100vh;
          position: fixed;
          z-index: -1;
        `}
      />
      <Banner />
      <Fade bottom>
        <About />
        <Quote />
        <Projects />
      </Fade>
      <Footer setDarkTheme={setDarkTheme} setLightTheme={setLightTheme} />
    </ThemeProvider>
  )
}

export default App
