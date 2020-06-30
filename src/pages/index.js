import React, { useState } from "react"
import { ThemeProvider } from 'emotion-theming'

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

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
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