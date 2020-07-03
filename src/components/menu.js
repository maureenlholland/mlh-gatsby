import React from 'react';
import { css } from "@emotion/core"

import { dark } from "./theme"

const Menu = () => (
    <nav
        css={css`
            width: 100vw;
            padding: 10px;
            background: ${dark.colors.accent};
            color: ${dark.colors.backgroundAlt};
        `}
    >
        <ul
            css={css`
                max-width: 500px;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                margin: 0 auto;

                li {
                    flex: 1 0 100px;
                    text-align: center;
                }
            `}
        >
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
)

export default Menu;