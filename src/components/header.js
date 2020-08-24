import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"
import Menu from "./menu"

const Header = () => (
  <header
      css={css`
        color: ${dark.colors.accent};
        background: ${dark.colors.backgroundAlt};
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        padding: 10px;
      `}
    >
      <div
        className="wrapper"
        css={css`
          max-width: 1400px;
          margin: 0 auto;
        `}
      >
        <Menu />
      </div>
    </header>
)

export default Header;