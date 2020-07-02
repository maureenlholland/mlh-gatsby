import React from "react"

import Section from './section'
import Title from './title'

const About = () => (
  <Section className="about">
    <div className="box">
      <Title content="About" />
      <p>I am extremely introverted and incredibly curious.</p>
      <p>I graduated from the University of Toronto with an Honours Bachelor of Arts in English and Cinema Studies. Got the idea to try coding while watching Silicon Valley, after years of under-employment.</p>
      <p>The career switch fit because web development feeds both the creative and logical parts of my brain. Every day is an opportunity to build something new or fix something old.</p>
      <p>Fun fact: I started coding when Santigold's 99 cents album came out. I have listened to Run the Races 306 times and counting.</p>
    </div>
  </Section>
)

export default About
