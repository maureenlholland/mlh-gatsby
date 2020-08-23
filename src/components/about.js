import React from "react"
import { css } from "@emotion/core"

import Section from './section'
import Title from './title'

const About = () => (
  <Section id="about">
    <div className="box" css={css`padding: 35px 20px`}>
      <Title content="About" />
      <p>I decided to try coding while under-employed and watching Silicon Valley.</p>
      <p>I had graduated from the University of Toronto with an Honours Bachelor of Arts in English and Cinema Studies. I figured the only transferable skill would be my ability to sit at computer typing for hours on end. But I had spent enough time studying stories to absorb some valuable logic and creative problem solving skills as well. I bring a lot of empathy and adaptability to my web development work.</p>
      <p>My go-to coding music from Day 1 has been Santigold's 99&#162; album. I will listen to Run the Races on repeat. 381 times and counting.</p>
    </div>
  </Section>
)

export default About
