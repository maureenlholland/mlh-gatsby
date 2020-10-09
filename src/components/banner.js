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
        padding: 60px 20px;
        @media all and (min-width: 500px) {
          padding: 60px 60px;
        }
      `}
    >
      <h1
        className="title"
        css={css`
          line-height: 1.3;
          font-size: 55px;
          @media all and (min-width: 1024px) {
            font-size: 70px;
          }
        `}
      >
        Maureen Holland
      </h1>
      <h2
        className="title"
        css={css`
          margin-top: 20px;
          text-transform: lowercase;
          font-size: 1.5rem;
          @media all and (min-width: 1024px) {
            font-size: 2rem;
          }
        `}
      >
        writer &amp; web developer
      </h2>
    </div>
    {/* </div> */}
  </section>
)

export default Banner
