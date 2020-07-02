import React from "react"
import Img from "gatsby-image"

const Image = ({ src, alt }) => (
  <Img
    fluid={src}
    alt={alt}
  />
)

export default Image
