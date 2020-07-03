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
        padding: 10px;
      `}
    >
          <svg
            css={css`
              width: 30px;
              display: block;
              margin-left: auto;
            `}
            viewBox="0 0 100 100"
            stroke={`${dark.colors.accent}`} stroke-width="7px"
          >
            <line x1="0" y1="80" x2="100" y2="80" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="0" y1="20" x2="100" y2="20" />
          </svg>
    </header>
)

export default Header;