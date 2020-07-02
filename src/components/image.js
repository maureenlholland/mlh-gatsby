import React from "react"
import Img from "gatsby-image"
import { css } from '@emotion/core';

const Image = ({ src, alt, styles }) => (
  <Img
    fluid={src}
    alt={alt}
    css={css`${styles}`}
  />
)

export default Image
