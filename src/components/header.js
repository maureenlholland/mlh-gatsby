import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"

const Header = () => (
  <header
      css={css`
        color: ${dark.colors.accent};
        background: ${dark.colors.backgroundAlt};
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
      `}
    >
          <span aria-label="logo">MH</span>
          <nav>Menu (icon)</nav>
    </header>
)

export default Header;