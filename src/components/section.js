import React from 'react'

const Section = ({ children, title }) => (
    <section className={`section section--${title.toLowerCase()}`}>
        <div className="wrapper">
            <h2>{title}</h2>
            {children}
        </div>
    </section>
);

export default Section
