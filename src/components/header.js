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
      <button
        css={css`
          display: block;
          margin-left: auto;
          border: 1px solid transparent;
          background: transparent;
          transition: background 0.2s;

          svg {
            width: 30px;
            stroke: ${dark.colors.accent};
            stroke-width: 7px;
            transition: stroke 0.2s;
          }

          :hover,
          :focus {
            /* border: 1px solid ${dark.colors.accent}; */
            background: ${dark.colors.accent};

            svg {
              stroke: black;
            }
          }
        `}
      >
        <svg viewBox="0 0 100 100">
          <line x1="0" y1="80" x2="100" y2="80" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="0" y1="20" x2="100" y2="20" />
        </svg>
        </button>
        <div css={css`
          position: absolute;
          top: 100%;
          right: 0%;
        `}>
          <Menu />
        </div>
    </header>
)

export default Header;