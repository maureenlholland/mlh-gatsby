import React, { useState, useEffect } from 'react';
import { css, keyframes } from "@emotion/core"
import Scrollchor from 'react-scrollchor';

import { dark } from "./theme"

// todo (refactor): break out menu toggle button, component too long
// todo (refactor): useEffect hook to get dynamic size of topbar for offset of scroll

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
    const [isExpanded, toggleExpanded] = useState(false)

    useEffect(() => {
        const closeMenu = (e) => {
            if (e.key === 'Escape' & isExpanded) {
                toggleExpanded(false);
            }
        };
        
        document.addEventListener('keydown', closeMenu)
        
        //unbind the event listener on unmount
        return () => {
          document.removeEventListener('keydown', closeMenu)
        }
      }, []); // Empty parentheses will cause this to run once at mount

    return (
        <nav>
            <button
                aria-expanded={isExpanded}
                onClick={() => toggleExpanded(!isExpanded)}
                css={css`
                    display: block;
                    margin-left: auto;
                    border: 1px solid transparent;
                    background: transparent;
                `}
            >
                <svg
                    className={`icon icon--${isExpanded ? 'close' : 'menu'}`} 
                    viewBox="0 0 100 100"
                    css={css`
                        width: 30px;
                        display: block;

                        .line {
                            stroke: ${dark.colors.accent};
                            stroke-width: 7px;
                        }

                        .line--1 {
                            transform: translateY(-30%);
                        }

                        .line--3 {
                            transform: translateY(30%);
                        }

                        &.icon--close {
                            .line--1 {
                                animation: ${tiltDown} 0.5s forwards;
                            }

                            .line--2 {
                                animation: ${disappear} 0.5s forwards;
                            }

                            .line--3 {
                                animation: ${tiltUp} 0.5s forwards;
                            }
                        }

                        /* neither runs when both classes are uncommented, try with useEffect? something about render order? */
                        /* &.icon--menu {
                            .line--1 {
                                animation: ${tiltDown} 0.5s reverse forwards;
                            }

                            .line--2 {
                                animation: ${disappear} 0.5s reverse forwards;
                            }

                            .line--3 {
                                animation: ${tiltUp} 0.5s reverse forwards;
                            }   
                        } */
                    `}
                >
                    {/* need to put transform-origin at center after translateY (unless element starts at center, as I'm using for workaround here) */}
                    <line className="line line--1" x1="0" y1="50" x2="100" y2="50" />
                    <line className="line line--2" x1="0" y1="50" x2="100" y2="50" />
                    <line className="line line--3" x1="0" y1="50" x2="100" y2="50" />
                </svg>
            </button>
            <ul
                css={css`
                    position: absolute;
                    visibility:${isExpanded ? 'visible' : 'hidden'};
                    top: 100%;
                    left: ${isExpanded ? '0%' : '100%'};
                    width: 100%;
                    display: grid;
                    grid-template-rows: auto;
                    grid-template-columns: 1fr auto auto auto 1fr;
                    grid-template-areas: ". about projects contact .";
                    background: ${dark.colors.accent};
                    transition: left 0.5s;
    
                    li {
                        padding: 10px;
                        text-align: center;
                    }
    
                    a {
                        display: block;
                        position: relative;
                        padding: 3px 0;
                        margin: 7px;
                        line-height: 1;
                        text-decoration: none;
                        color: ${dark.colors.backgroundAlt};
                        border: 2px solid transparent;
                        transition: border-bottom 0.3s;

                        :hover,
                        :focus {
                            border-bottom: 2px solid ${dark.colors.backgroundAlt};
                            outline: 0;
                        }
                    }
                `}
            >
                <li css={css`grid-area: about;`}>
                    <Scrollchor to="about" animate={{ offset: -150 }}>About</Scrollchor>
                </li>
                <li css={css`grid-area: projects;`}>
                    <Scrollchor to="projects" animate={{ offset: -150 }}>Projects</Scrollchor>
                </li>
                <li css={css`grid-area: contact;`}>
                    <Scrollchor to="contact" animate={{ offset: -150 }}>Contact</Scrollchor>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;