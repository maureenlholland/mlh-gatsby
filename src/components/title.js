import React from 'react'

const Title = ({ content, isCentered }) => (
    <h2 className={`title ${isCentered ? 'title--center' : ''}`}>{content}</h2>
);

export default Title
