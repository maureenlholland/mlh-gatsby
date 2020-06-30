import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Header = () => {
  const theme = useTheme()

  return (
    <header
      css={css`
        background: ${theme.backgroundSolid};
        color: ${theme.colorAccent};
        padding: 10px;
        transition: background 0.25s, color 0.25s;
      `}
    >
          <span aria-label="logo">MH</span>
          <nav>Menu (icon)</nav>
    </header>
  )
}

export default Header;