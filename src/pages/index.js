import React, { useState } from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"

import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Quote from "../components/quote"
import Projects from "../components/projects"
import Footer from "../components/footer"
import { dark, light } from '../components/theme'
import Bg from "../assets/bg.svg"

const App = () => {
  const [theme, setTheme] = useState('dark');

  // todo => persist user choice on return visit
  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  // check order of operations, rendering
  const styles = theme === 'dark' ? dark : light

  return (
    <ThemeProvider theme={styles}>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
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
            font-family: 'josefin sans';
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

          [hidden] { display: none; }

          .title {
            text-align: center;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: normal;
          }

          .section--projects .title,
          .contact .title {
            padding-top: 50px;
          }

          .box {
            border: 1px solid ${styles.colors.main};
            background: ${styles.colors.background};
            padding: 20px;
          }
        `}
      />
      <SEO title="Maureen Holland" />
      <Header/>
      <Bg
        css={css`
          width: 100%;
          height: 100vh;
          position: fixed;
          z-index: -1;
        `}
      />
      <Banner/>
      <About/>
      <Quote/>
      <Projects/>
      <Footer
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
    </ThemeProvider>
  )
}

export default App