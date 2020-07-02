import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Section from './section'
import Title from './title'

const Projects = () => {
  const theme = useTheme();
  const rgbValues = (theme.colors.background).match(/rgb\((.*)\)/)[1];

  return (
    <Section className="projects"
      css={css`
        background: rgba(${rgbValues}, 0.8);
      `}
    >
      <Title content="Projects" />
      <ul
        css={css`
        padding-top: 50px;
      `}
      >
        <li>
          {/* img goes here */}
          <h3>Project title</h3>
          <p
            css={css`
              margin: 0;
            `}
          >
            Info about project. Info about project. Info about project.  Info about project.  Info about project.  Info about project.  Info about project. Info about project. Info about project. vInfo about project. vInfo about project. vInfo about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project. Info about project.</p>
        </li>
      </ul>
    </Section>
  )
}

export default Projects
