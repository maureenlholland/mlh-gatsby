import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Image from './image'

const Title = ({ title }) => {
    const theme = useTheme();

    return (
        <h3
            css={css`
                grid-area: title;
                font-size: 1.5rem;
                text-align: center;
            `}
        >
            {title}
        </h3>
    )
};

const Skills = ({ skills }) => (
    <ul css={css`grid-area: skills;`}>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
)

const Desc = ({ desc }) => <p css={css` grid-area: desc;`}>{desc}</p>;

const GithubLink = ({ href }) => (
    <a css={css`grid-area: github;`} href={href}>View Github</a>
);

const LiveLink = ({ href }) => (
    <a css={css`grid-area: live;`} href={href}> View Live</a>
);

const Project = ({ project }) => {
    const { title, imageSrc, imageAlt, desc, skills, github, live } = project;

    return (
        <li
            css={css`
                display: grid;
                grid-template-rows: 250px auto auto auto auto auto 20px;
                grid-template-columns: 20px 1fr 20px;
                grid-template-areas: 
                "img img img"
                "title title title"
                ". skills ."
                ". desc ."
                ". github ."
                ". live ."
                ". . .";
            `}
        >
            <Image
                styles={'grid-area: img'}
                src={imageSrc}
                alt={imageAlt}
            />
            <Title title={title} />
            <Skills skills={skills} />
            <Desc desc={desc} />
            <GithubLink href={github} />
            <LiveLink href={live} />
        </li>
    )
}

export default Project