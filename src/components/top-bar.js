import React from "react"
import { css } from "@emotion/core"

import { dark } from "./theme"
import Menu from "./menu"

const TopBar = () => (
  <section
    className="top-bar"
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
    <div className="wrapper wrapper--large">
      <Menu />
    </div>
  </section>
)

export default TopBar
