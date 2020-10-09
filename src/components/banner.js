import React from "react"
import { css } from "@emotion/core"

const Banner = () => (
  <section
    css={css`
      height: 100vh;
    `}
  >
    {/* <div className="wrapper wrapper--large"> */}
    <div
      className="box | wrapper wrapper--large"
      css={css`
        position: relative;
        top: 30%;
        padding: 60px 10px;
      `}
    >
      <h1
        className="title title--center"
        css={css`
          line-height: 1.3;
          font-size: 55px;
        `}
      >
        Maureen Holland
      </h1>
      <h2
        className="title title--center"
        css={css`
          margin-top: 20px;
          text-transform: lowercase;
          font-size: 1.5rem;
        `}
      >
        writer &amp; web developer
      </h2>
    </div>
    {/* </div> */}
  </section>
)

export default Banner
