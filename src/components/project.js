import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Image from './image'

const Project = ({ project }) => {
    console.log(project);
    return (
        <li>
            <Image
                src={project.imageSrc}
                alt={project.imageAlt}
            />
            <h3>{project.title}</h3>
            <a href={project.github}>Github</a>
            <a href={project.live}>Live</a>
            <MDXRenderer>{project.body}</MDXRenderer>
        </li>
    )
}

export default Project