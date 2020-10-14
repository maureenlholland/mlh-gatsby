import React, { useState } from "react"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import TopBar from "../components/top-bar"
import Banner from "../components/banner"
import About from "../components/about"
import Quote from "../components/quote"
import Projects from "../components/projects"
import Footer from "../components/footer"
import { dark, light } from "../components/theme"

const App = () => {
  const [theme, setTheme] = useState("dark")

  // todo => persist user choice on return visit
  const setDarkTheme = () => setTheme("dark")
  const setLightTheme = () => setTheme("light")

  // check order of operations, rendering
  const styles = theme === "dark" ? dark : light

  return (
    <Layout styles={styles}>
      <div className="splash">
        <span>MH</span>
      </div>
      <header>
        <TopBar />
        <Banner />
      </header>
      <Fade bottom>
        <main>
          <About />
          <Quote />
          <Projects />
        </main>
      </Fade>
      <Footer setDarkTheme={setDarkTheme} setLightTheme={setLightTheme} />
    </Layout>
  )
}

export default App
