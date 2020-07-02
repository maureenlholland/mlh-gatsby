import React, { useState } from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"

// import Image from "../components/image"
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

  // todo => add custom hook: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/#the-usedarkmode-hook
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

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

          body {
            margin: 0;
            background: ${styles.colors.background};
            color: ${styles.colors.main};
            font-family: 'josefin sans';
            font-size: 18px;
            transition: background 0.2s, color 0.2s;
            line-height: 1.8;
          }

          h1,
          h2,
          h3 {
            margin: 0;
          }

          .title {
            text-align: center;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: normal;
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
      <Footer toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App