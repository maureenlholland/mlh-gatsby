import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Quote = () => {
  const theme = useTheme()

  return (
    <blockquote
      css={css`
        background: ${theme.colors.backgroundAlt};
        color: ${theme.colors.accent};
        margin: 40px 0 0 0;
        padding: 20px;
      `}
    >
      I want people to like my music, but I don't make my music for other people. If nobody heard my music, I would still make it. It's my life force, it's what I have to do to feel like a person.
      <cite
        css={css`
          display: block;
          text-align: right;
          font-style: normal;
        `}
      >- Santigold</cite>
    </blockquote>
  )
}

export default Quote
