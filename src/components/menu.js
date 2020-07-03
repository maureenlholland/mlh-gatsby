import React from 'react';
import { css, keyframes } from "@emotion/core"

import { dark } from "./theme"

const tiltDown = keyframes`
    0% {
        transform: translateY(-30%) rotate(0deg);
    }
    50% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform-origin: center center;
        transform: translateY(0) rotate(45deg);
    }
`;

const tiltUp = keyframes`
    0%   {
        transform: translateY(30%) rotate(0deg);
    }
    50% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform-origin: center center;
        transform: translateY(0) rotate(-45deg);
    }
`;

const disappear = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Menu = () => {
    return (
        <nav>
            <button
                onClick={() => console.log('click')}
                css={css`
                    display: block;
                    margin-left: auto;
                    border: 1px solid transparent;
                    background: transparent;
                    transition: background 0.2s;
        
                    .menu-icon {
                        width: 30px;
                        stroke: ${dark.colors.accent};
                        stroke-width: 7px;
                        transition: stroke 0.2s;
                    }

                    .line1 {
                        transform: translateY(-30%);
                    }

                    .line3 {
                        transform: translateY(30%);
                    }
        
                    :hover,
                    :focus {
                        /* background: ${dark.colors.accent}; */
        
                        /* .menu-icon {
                            stroke: black;
                        } */

                        .line1 {
                            animation: ${tiltDown} 0.5s forwards;
                        }

                        .line2 {
                            animation: ${disappear} 0.5s forwards;
                        }

                        .line3 {
                            animation: ${tiltUp} 0.5s forwards;
                        }
                    }
                `}
            >
                <svg className="menu-icon" viewBox="0 0 100 100">
                    {/* need to put transform-origin at center after translateY (unless element starts at center, as I'm using for workaround here) */}
                    <line className="line1" x1="0" y1="50" x2="100" y2="50" />
                    <line className="line2" x1="0" y1="50" x2="100" y2="50" />
                    <line className="line3" x1="0" y1="50" x2="100" y2="50" />
                </svg>
            </button>
            <ul
                css={css`
                    position: absolute;
                    top: 100%;
                    right: 0%;
                    width: 100%;
                    display: grid;
                    grid-template-rows: auto;
                    grid-template-columns: 1fr auto auto auto 1fr;
                    grid-template-areas: ". about projects contact .";
                    background: ${dark.colors.accent};
    
                    li {
                        padding: 5px 10px;
                        text-align: center;
                    }
    
                    a {
                        display: block;
                        position: relative;
                        padding: 5px;
                        margin-bottom: 5px;
                        text-decoration: none;
                        color: ${dark.colors.backgroundAlt};
                    }
                `}
            >
                <li css={css`grid-area: about;`}>
                    <a href="#about">About</a>
                </li>
                <li css={css`grid-area: projects;`}>
                    <a href="#projects">Projects</a>
                </li>
                <li css={css`grid-area: contact;`}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;