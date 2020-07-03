import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"
import Title from "./title"
import ContactList from "./contact-list";
import ThemeToggle from "./theme-toggle";


const Footer = ({ setLightTheme, setDarkTheme }) => (
  <footer
    className="footer"
    css={css`
      padding-bottom: 50px;
      background: ${dark.colors.backgroundAlt};
      color: ${dark.colors.main};
    `}
  >
    <Title content="Contact" />
    <ContactList />
    <ThemeToggle
      setDarkTheme={setDarkTheme}
      setLightTheme={setLightTheme}
    />
  </footer>
)

export default Footer
