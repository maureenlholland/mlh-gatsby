import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"
import Title from "./title"
import ContactList from "./contact-list";
import ThemeToggle from "./theme-toggle";
import { FaRegCopyright } from "react-icons/fa";


const Footer = ({ setLightTheme, setDarkTheme }) => (
  <footer
    id="contact"
    className="contact"
    css={css`
      background: ${dark.colors.backgroundAlt};
      color: ${dark.colors.main};
    `}
  >
    <div css={css`padding: 50px 20px;`}>
    <Title content="Contact" isCentered />
      <ContactList />
      <ThemeToggle
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
    </div>
    <p
      css={css`
        font-size: 0.7rem;
        text-align: center;
        line-height: 1;
        margin: 0;
        padding: 3px;
      `}
    >
      <FaRegCopyright/> 2020. Design and Profile Illustration by John David Holland.
    </p>
  </footer>
)

export default Footer
