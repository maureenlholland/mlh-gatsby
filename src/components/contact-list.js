import React from 'react';
import { css } from "@emotion/core"
import {
    FaEnvelope,
    FaLinkedinIn,
    FaGithubSquare
  } from 'react-icons/fa';

const contact = {
    linkedin: {
        text: 'LinkedIn',
        icon: FaLinkedinIn
    },
    email: {
        text: 'Email',
        icon: FaEnvelope
    },
    github: {
        text: 'Github',
        icon: FaGithubSquare
    }
}

const ContactItem = ({ type }) => {
    const item = contact[type];
    const Icon = item.icon;
    return (
        <li>
            <span className="visually-hidden">${item.text}</span>
            <Icon />
        </li>
    ) 
}

const ContactList = () => (
    <ul
      css={css`
        margin-top: 70px;
        display: flex;
        justify-content: center;

        /* to do: add links and hover/focus styles */
        svg {
          font-size: 2.5rem;
          margin: 0 30px;
        }
      `}
    >
      <ContactItem type="linkedin"/>
      <ContactItem type="email"/>
      <ContactItem type="github"/>
    </ul>
);

export default ContactList;