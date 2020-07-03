import React from "react"
import { css } from "@emotion/core"
import {
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaSun,
  FaMoon
} from 'react-icons/fa';

import { dark } from "./theme"
import Title from "./title"

const Footer = ({ setLightTheme, setDarkTheme }) => (
  <footer
    className="footer"
    css={css`
      padding-bottom: 50px;
      background: ${dark.colors.backgroundAlt};
      color: ${dark.colors.main};
    `}
  >
    <Title content="Contact" />
    <ul
      css={css`
        margin-top: 70px;
        display: flex;
        justify-content: center;

        /* to do: add links and hover/focus styles */
        svg {
          font-size: 2rem;
          margin: 10px;
        }
      `}
    >
      <li>
        <span className="visually-hidden">Email</span>
        <FaEnvelope/>
      </li>
      <li>
        <span className="visually-hidden">LinkedIn</span>
        <FaLinkedin/>
      </li>
      <li>
        <span className="visually-hidden">GitHub</span>
        <FaGithubSquare/>
      </li>
    </ul>
    <ul
      css={css`
        margin-top: 70px;
        display: grid;
        grid-template-rows: 1fr;
        /* name lines? toggle-ui-start toggle-ui-end */
        grid-template-columns: 1fr 40px 40px 40px 40px 1fr;
        grid-template-areas:
        ". light light dark dark .";
        cursor: pointer;

        button {
          color: ${dark.colors.main};
          padding: 10px;
          width: 100%;
          display: block;
          background: transparent;
          border: transparent;
          position: relative;
          z-index: 100;
        }
      `}
    >
      <li css={css`grid-area: light; text-align: left;`}>
        <button
          aria-pressed="true"
          onClick={setLightTheme}
          css={css`text-align: left;`}
        >
          <span className="visually-hidden">Set Light Theme</span>
          <FaSun/>
        </button>
      </li>
      <li
        css={css`grid-area: dark;`}
      >
        <button
          aria-pressed="false"
          onClick={setDarkTheme}
          css={css`text-align: right;`}
        >
          <span className="visually-hidden">Set Dark Theme</span>
          <FaMoon/>
        </button>
      </li>
      {/* shouldn't have div nested in ul, bad html structure, but need nested toggle container so after/before elements are a nightmare to position */}
      <div
        css={css`
          border: 3px solid ${dark.colors.main};
          border-radius: 50px;
          background: #304D58;
          grid-area: 1 / 3 / 2 / 5;
          padding: 3px;
        `}
      >
        <div
          css={css`
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${dark.colors.main};
            grid-area: 1 / 4 / 2 / 5;
            position: relative;
            left: 0;
            /* todo: add transition on click */
            /* left: calc(100% - 25px); */
          `}
        ></div>
      </div>
    </ul>
  </footer>
)

export default Footer
