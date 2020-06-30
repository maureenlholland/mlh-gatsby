import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Header = () => {
  const theme = useTheme()

  return (
    <header
      css={css`
        color: ${theme.colors.accent};
        background: rgb(7, 16, 21);
      `}
    >
          <span aria-label="logo">MH</span>
          <nav>Menu (icon)</nav>
    </header>
  )
}

export default Header;