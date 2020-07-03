import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Section from './section'
import Title from './title'
import Project from './project'
import useProjects from '../hooks/use-projects'

const Projects = () => {
  const theme = useTheme();
  const rgbValues = (theme.colors.background).match(/rgb\((.*)\)/)[1];
  const projects = useProjects();

  return (
    <Section className="projects"
      css={css`
        background: rgba(${rgbValues}, 0.9);
      `}
    >
      <Title content="Projects" />
      <ul>
        {projects.map(project => <Project key={project.id} project={project}/>)}
      </ul>
    </Section>
  )
}

export default Projects
