import React from "react"
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
    <Section id="projects"
      styles={`background: rgba(${rgbValues}, 0.8); padding-bottom:50px;`}
    >
      <Title content="Projects" />
      <ul>
        {projects.map(project => <Project key={project.id} project={project}/>)}
      </ul>
    </Section>
  )
}

export default Projects
