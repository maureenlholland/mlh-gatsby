import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"
import Title from "./title"

const Footer = ({ toggleTheme }) => (
  <footer
    className="footer"
    css={css`
      background: ${dark.colors.backgroundAlt};
      color: ${dark.colors.main};
    `}
  >
    <Title content="Contact" />
    <button onClick={toggleTheme}>Toggle theme</button>
  </footer>
)

export default Footer
