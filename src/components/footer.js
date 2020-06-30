import React from "react"
import Title from "./title"

const Footer = ({ toggleTheme }) => (
  <footer>
    <Title content="Contact" />
    <button onClick={toggleTheme}>Toggle theme</button>
  </footer>
)

export default Footer
