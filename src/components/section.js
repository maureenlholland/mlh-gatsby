import React from 'react'
import { css } from "@emotion/core"

const Section = ({ children, id, styles, wrapperSize }) => (
    <section
        id={id}
        className={`section section--${id}`}
        css={css`${styles}`}
    >
        <div className={`wrapper wrapper--${wrapperSize ? wrapperSize : 'large'}`}>
            {children}
        </div>
    </section>
);

export default Section
