import React from 'react'
import Title from './title'

const Section = ({ children, className }) => (
    <section className={`section section--${className}`}>
        {children}
    </section>
);

export default Section
