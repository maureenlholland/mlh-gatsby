import React from "react"
import Section from './section'
import Title from './title'

const About = () => (
  <Section className="about">
    <div className="box">
      <Title content="About" />
      <p>I am extremely introverted and incredibly curious.</p>
      <p>I went to the University of Toronto for English and Cinema Studies and am as surprised as anyone that I learned to code. Turns out watching Silicon Valley while under-employed can be very motivating.</p>
      <p>The career switch fit because web development feeds both the creative and logical parts of my brain. Every day is an opportunity to build something new or fix something old.</p>
      <p>Fun fact: I started coding when Santigold's 99 cents album came out. I have listened to Run the Races 306 times and counting.</p>
    </div>
  </Section>
)

export default About
