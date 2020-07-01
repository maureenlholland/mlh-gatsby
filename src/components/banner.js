import React from "react"
import { css } from "@emotion/core"

const Banner = () => (
  <section
    css={css`
      height: 100vh;
    `}
  >
    <div
      className="box"
      css={css`
        transform: translateY(50%);
        padding: 40px;
      `}
    >
      <h1
        className="title"
        css={css`
          line-height: 1.3;
          font-size: 60px;
          margin: 0;
        `}
      >
        Maureen Holland
      </h1>
      <h2
        className="title"
        css={css`
          margin-top: 20px;
          text-transform: lowercase;
      `}
      >
        writer &amp; web developer
      </h2>
    </div>
  </section>
)

export default Banner
