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

const App = () => {
  const [theme, setTheme] = useState('light');

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
          }

          .title {
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            font-size: 1.6rem;
          }

          h1.title {
            font-size: 2rem;
          }
        `}
      />
      <SEO title="Maureen Holland" />
      <Header/>
      <Banner/>
      <About/>
      <Quote/>
      <Projects/>
      <Footer toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App