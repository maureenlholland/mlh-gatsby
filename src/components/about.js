import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Section from "./section"
import Title from "./title"
import Pic from "../assets/mh-pic.svg"

const About = () => {
  const theme = useTheme()

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
            display: none;
            @media all and (min-width: 1024px) {
              display: block;
              min-width: 350px;
              line-height: 1;
              svg {
                display: block;
                filter: drop-shadow(1px -1px 5px ${theme.colors.backgroundAlt});
              }
            }
          `}
        >
          <Pic />
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
              height: 200px;
              text-align: center;
              svg {
                height: inherit;
                filter: drop-shadow(1px -1px 5px ${theme.colors.backgroundAlt});
              }
              @media all and (min-width: 500px) {
                float: left;
                margin-right: 20px;
              }
              @media all and (min-width: 1024px) {
                display: none;
              }
            `}
          >
            <Pic />
          </div>
          <div className="content-container">
            <p>
              I am a Fullstack freelance developer currently based in Durham,
              UK.
            </p>
            <p>
              I graduated from the University of Toronto with an Honours
              Bachelor of Arts in English and Cinema Studies and bring a lot of
              empathy and adaptability to my web development work.
            </p>
            <p>
              My go-to coding music from Day 1 has been Santigold's 99&#162;
              album. I will listen to Run the Races on repeat. 424 times and
              counting.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
