import React from 'react'
import { css } from "@emotion/core"

const Section = ({ children, id, styles }) => (
    <section
        id={id}
        className={`section section--${id}`}
        css={css`${styles}`}
    >
        {children}
    </section>
);

export default Section
