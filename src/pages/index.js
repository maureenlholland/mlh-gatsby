import React from "react"

// import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from "../components/nav-bar"
import Header from "../components/header"
import About from "../components/about"
import Quote from "../components/quote"
import Projects from "../components/projects"
import Footer from "../components/footer"

const App = () => (
  <>
    <SEO title="Maureen Holland" />
    <NavBar/>
    <Header/>
    <About/>
    <Quote/>
    <Projects/>
    <Footer/>
  </>
)

export default App