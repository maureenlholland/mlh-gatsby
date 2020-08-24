import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Section from './section'
import Title from './title'
import Pic from "../assets/mh-pic.svg"

const About = () => {
  const theme = useTheme()

  return (
    <Section
      id="about"
      css={css`
        display: grid;
        grid-template-rows: 1fr;
      `}
    >
      <div
        className="box"
        css={css`
          padding: 35px 20px;
          @media all and (min-width: 500px) {
            width: 80%;
            max-width: 900px;
            margin: 0 auto;
          }
        `}
      >
        <Title content="About" />
        <div
          className="image-container"
          css={css`
            height: 200px;
            text-align: center;
            svg {
              height: inherit;
              filter: drop-shadow(2px -2px 3px ${theme.colors.backgroundAlt})
            }
            @media all and (min-width: 500px) {
              float: left;
              margin-right: 20px;
            }
          `}
        >
          <Pic />
        </div>
        <div className="content-container">
          <p>I decided to try coding while under-employed and watching Silicon Valley.</p>
          <p>I had graduated from the University of Toronto with an Honours Bachelor of Arts in English and Cinema Studies. I figured the only transferable skill would be my ability to sit at computer typing for hours on end. Turns out I had spent enough time studying stories to absorb some valuable logic and creative problem solving skills as well. I bring a lot of empathy and adaptability to my web development work.</p>
          <p>My go-to coding music from Day 1 has been Santigold's 99&#162; album. I will listen to Run the Races on repeat. 381 times and counting.</p>
        </div>
      </div>
    </Section>
  );
}

export default About
