import React from "react"
import { useTheme } from "emotion-theming"
import { css } from "@emotion/core"

import Section from "./section"
import Title from "./title"
import Project from "./project"
import useProjects from "../hooks/use-projects"

const Projects = () => {
  const theme = useTheme()
  const rgbValues = theme.colors.background.match(/rgb\((.*)\)/)[1]
  const projects = useProjects()

  return (
    <Section
      id="projects"
      styles={`background: rgba(${rgbValues}, 0.93); padding:50px 0;`}
    >
      <Title content="Projects" />
      <ul
        // horizontal scrolling css adapted from Piccalilli's awesome 11ty course: https://piccalil.li/course/learn-eleventy-from-scratch/
        css={css`
          display: flex;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;

          > * {
            width: 320px;
            flex-shrink: 0;
            margin-right: 50px;
          }
        `}
      >
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
