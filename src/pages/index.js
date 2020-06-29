import React from "react"

// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Quote from "../components/quote"
import Projects from "../components/projects"
import Footer from "../components/footer"

const App = () => (
  <>
    <SEO title="Maureen Holland" />
    <Header/>
    <Banner/>
    <About/>
    <Quote/>
    <Projects/>
    <Footer/>
  </>
)

export default App