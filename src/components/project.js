import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Image from './image'
import LinkDeco1 from "../assets/link-deco-1.svg"
import LinkDeco2 from "../assets/link-deco-2.svg"

const Title = ({ title }) => {
    const theme = useTheme();
    const rgbValues = (theme.colors.backgroundAlt).match(/rgb\((.*)\)/)[1];

    return (
        <h3
            css={css`
                grid-area: title;
                font-size: 1.5rem;
                text-align: center;
                background: rgba(${rgbValues}, 0.5);
                padding: 20px;
            `}
        >
            {title}
        </h3>
    )
};

const Skills = ({ skills }) => (
    <ul css={css`
        grid-area: skills;
        display: flex;
        justify-content: center;
        text-transform: uppercase;
        font-size: 0.8rem;

        li {
            margin-top: 30px;
            margin-right: 20px;
        }

        li:last-of-type {
            margin-right: 0;
        }
    `}>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
)

const Desc = ({ desc }) => <p css={css` grid-area: desc; margin-top: 25px;`}>{desc}</p>;

const Link = ({ href, name }) => {
    const theme = useTheme();
    const Deco = name === 'Live' ? LinkDeco1 : LinkDeco2;
    const nbToFlip = name === 'Live' ? 1 : 2;

    return (
        <a
            css={css`
                grid-area: ${name.toLowerCase()};
                text-decoration: none;
                color: ${theme.colors.accent};
                display: flex;
                justify-content: center;
                align-items: center;
                white-space: nowrap;
                :nth-of-type(1) {
                    margin-top: 10px;
                }

                svg {
                    flex: 1 1 100px;
                    stroke: ${theme.colors.accent};
                    stroke-width: 1px;
                    fill: transparent;
                    :nth-of-type(${nbToFlip}) {
                        transform: rotateY(180deg);
                    }
                }

                /* look into reduced motion or removing transition based on user pref. */
                .draw-me {
                    stroke-dasharray: 500;
                    stroke-dashoffset: 500;
                    transition: stroke-dashoffset 0.5s;
                }

                &:hover,
                &:focus {
                    outline: none;
                    .draw-me {
                        stroke-dashoffset: 0;
                        transition: stroke-dashoffset ease-in 1.2s;
                    }
                }
            `}
            href={href}
        >
            <Deco/>
            <span css={css`margin: 0 10px;`}>View {name}</span>
            <Deco/>
        </a>
    );
}

const Project = ({ project }) => {
    const { title, imageSrc, imageAlt, desc, skills, github, live } = project;

    return (
        <li
            css={css`
                display: grid;
                grid-template-rows: 300px auto auto 1fr auto auto 20px;
                grid-template-columns: 20px 1fr 20px;
                grid-template-areas: 
                "img img img"
                "title title title"
                ". skills ."
                ". desc ."
                ". live ."
                ". github ."
                ". icon .";
            `}
        >
            <Image
                styles={'grid-area: img; margin-top: 50px;'}
                src={imageSrc}
                alt={imageAlt}
            />
            <Title title={title} />
            <Skills skills={skills} />
            <Desc desc={desc} />
            <Link href={live} name="Live" />
            <Link href={github} name="GitHub" />
        </li>
    )
}

export default Project