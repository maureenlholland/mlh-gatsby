import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"

import { dark } from "../components/theme"
import SEO from "../components/seo"
import Bg from "../assets/bg.svg"

const Layout = ({ children, styles }) => {
  const themeStyles = styles || dark

  return (
    <ThemeProvider theme={themeStyles}>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }

          ::selection {
            background: ${themeStyles.colors.accent};
            color: ${themeStyles.colors.backgroundAlt};
          }

          /* Scrollbar styles from Piccalilli's awesome 11ty course: https://piccalil.li/course/learn-eleventy-from-scratch/ */
          ::-webkit-scrollbar {
            height: 1rem;
          }

          ::-webkit-scrollbar-track {
            background-color: transparent;
            border: 1px solid ${themeStyles.colors.accent};
            border-radius: 0.25rem;
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${themeStyles.colors.accent};
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
            background: ${themeStyles.colors.background};
            color: ${themeStyles.colors.main};
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
            font-weight: normal;
            line-height: 1;
            @media all and (min-width: 500px) {
              & {
                font-size: 2.5rem;
              }
            }
            @media all and (min-width: 1024px) {
              & {
                font-size: 3.5rem;
              }
            }
          }

          .box {
            border: 1px solid ${themeStyles.colors.main};
            background: ${themeStyles.colors.background};
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

          .link {
            color: ${dark.colors.main};
            text-decoration: none;
            border-bottom: 1px dotted ${dark.colors.main};
            transition: color 0.2s, border-bottom 0.2s;
            &:hover,
            &:focus {
              color: ${dark.colors.accent};
              border-bottom: 1px dotted ${dark.colors.accent};
            }
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
            background: ${themeStyles.colors.backgroundAlt};
            color: ${themeStyles.colors.accent};
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
      <SEO title="Maureen Holland" />
      <Bg
        aria-hidden="true"
        css={css`
          width: 100%;
          height: 100vh;
          position: fixed;
          z-index: -1;
        `}
      />
      {children}
    </ThemeProvider>
  )
}

export default Layout
