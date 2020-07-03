import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Image from './image'

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

    return (
        <a
            css={css`
                grid-area: ${name.toLowerCase()};
                text-decoration: none;
                color: ${theme.colors.accent};
                text-align: center;
                :nth-of-type(1) {
                    margin-top: 10px;
                }
                :nth-of-type(2) {
                    margin-top: 20px;
                }
            `}
            href={href}
        >
                View {name}
        </a>
    );
}

const Project = ({ project }) => {
    const { title, imageSrc, imageAlt, desc, skills, github, live } = project;

    return (
        <li
            css={css`
                display: grid;
                grid-template-rows: 400px auto auto auto auto auto 20px;
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
                styles={'grid-area: img; margin-top: 50px'}
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