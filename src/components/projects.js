import React from "react"
import { useTheme } from "emotion-theming"
import { css } from '@emotion/core';

import Section from './section'
import Title from './title'
import Project from './project'
import useProjects from '../hooks/use-projects'

const Projects = () => {
  const theme = useTheme();
  const rgbValues = (theme.colors.background).match(/rgb\((.*)\)/)[1];
  const projects = useProjects();

  return (
    <Section id="projects"
      styles={`background: rgba(${rgbValues}, 0.8); padding:50px 0;`}
    >
      <Title content="Projects" />
      <ul
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          column-gap: 40px;
          @media all and (min-width: 500px) {
            width: 80%;
            max-width: 1200px;
            margin: 0 auto;
            grid-template-columns: repeat(auto-fill, minmax(250px, 400px));
          }
        `}
      >
        {projects.map(project => <Project key={project.id} project={project}/>)}
      </ul>
    </Section>
  )
}

export default Projects
