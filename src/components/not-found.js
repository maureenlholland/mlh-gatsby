import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NotFound = () => (
  <section
    css={css`
      height: 100vh;
    `}
  >
    <div
      className="box | wrapper wrapper--large"
      css={css`
        position: relative;
        top: 50%;
        padding: 60px 20px;
        transform: translateY(-50%);
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
        Not found
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
        <Link className="link" to="/">
          go home
        </Link>
      </h2>
    </div>
  </section>
)

export default NotFound
