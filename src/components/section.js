import React from 'react'
import Title from './title'

const Section = ({ children, title }) => (
    <section className={`section section--${title.toLowerCase()}`}>
        <Title content={title} />
        {children}
    </section>
);

export default Section
