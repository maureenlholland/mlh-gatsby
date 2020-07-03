import React from 'react';
import { css } from "@emotion/core"
import {
    FaSun,
    FaMoon
} from 'react-icons/fa';
import { useTheme } from "emotion-theming"

import { dark } from "./theme"

const ToggleSlider = () => {
    const theme = useTheme();
  
    return (
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
              left: ${theme.toggle.left};
              transition: left 0.2s;
            `}
          ></div>
        </div>
    )
  }

const ThemeToggle = ({ setDarkTheme, setLightTheme }) => (
    <ul
      css={css`
        margin-top: 70px;
        display: grid;
        grid-template-rows: 1fr;
        /* name lines? toggle-ui-start toggle-ui-end */
        grid-template-columns: 1fr 50px 40px 40px 50px 1fr;
        grid-template-areas:
        ". light light dark dark .";
        cursor: pointer;

        button {
          display: block;
          width: 100%;
          height: 100%;
          background: transparent;
          border: transparent;
          position: relative;
          z-index: 1;
          color: ${dark.colors.main};
        }

        svg {
          font-size: 1.7rem;
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
      <ToggleSlider/>
    </ul>
);

export default ThemeToggle;