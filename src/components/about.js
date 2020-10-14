import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Section from "./section"
import Title from "./title"
import ProfilePic from "./profile-pic"

const About = () => {
  const theme = useTheme()

  console.log(theme)

  return (
    <Section id="about">
      <div
        css={css`
          @media all and (min-width: 1024px) {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
        `}
      >
        <div
          className="image-container image-container--desktop"
          css={css`
            visibility: hidden;
            display: none;
            @media all and (min-width: 1024px) {
              visibility: visible;
              display: block;
              min-width: 350px;
              line-height: 1;
            }
          `}
        >
          <ProfilePic />
        </div>
        <div
          className="box"
          css={css`
            padding: 35px 20px;
            p:last-of-type {
              margin-bottom: 0;
            }
            @media all and (min-width: 500px) {
              padding: 35px 35px;
            }
            @media all and (min-width: 1024px) {
              padding: 50px 50px;
            }
          `}
        >
          <Title content="About" />
          <div
            className="image-container image-container--mobile"
            css={css`
              width: 150px;
              margin: 0 auto;
              @media all and (min-width: 500px) {
                float: left;
                margin-right: 20px;
              }
              @media all and (min-width: 1024px) {
                display: none;
                visibility: hidden;
              }
            `}
          >
            <ProfilePic />
          </div>
          <div className="content-container">
            <p>
              I am a Fullstack freelance developer currently based in Durham,
              UK. As a graduate from University of Toronto with an Honours
              Bachelor of Arts in English and Cinema Studies, I bring a lot of
              empathy and adaptability to web development work. Coding
              soundtrack from Day 1 has been Santigold's 99&#162; album. I will
              listen to Run the Races on repeat. 424 times and counting.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
