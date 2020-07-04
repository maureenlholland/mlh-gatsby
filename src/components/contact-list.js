import React from 'react';
import { css } from "@emotion/core"
import {
    FaEnvelope,
    FaLinkedinIn,
    FaGithubSquare
  } from 'react-icons/fa';

import { dark } from "./theme"

const contact = {
    linkedin: {
        text: 'LinkedIn',
        icon: FaLinkedinIn,
        link: 'https://ca.linkedin.com/in/maureenlholland'
    },
    email: {
        text: 'Email',
        icon: FaEnvelope,
        link: 'mailto: maureen.holland11@gmail.com"'
    },
    github: {
        text: 'Github',
        icon: FaGithubSquare,
        link: 'https://github.com/maureenlholland'
    }
}

const ContactItem = ({ type }) => {
    const item = contact[type];
    const Icon = item.icon;
    return (
        <li>
            <a
              href={item.link}
              css={css`
                color: white;
                .icon-container {
                  margin: 0 5px;
                  display: flex;
                  padding: 15px;
                  border-radius: 50%;
                  transition: color 0.2s, background 0.2s;
                }
                svg {
                  font-size: 3rem;
                }
                &:hover,
                &:focus {
                  .icon-container {
                    background: ${dark.colors.main};
                    color: ${dark.colors.backgroundAlt};
                  }
                }
              `}
            >
              <span className="visually-hidden">${item.text}</span>
              <span className="icon-container"><Icon /></span>
              
            </a>
        </li>
    ) 
}

const ContactList = () => (
    <ul
      css={css`
        margin-top: 70px;
        display: flex;
        justify-content: center;
      `}
    >
      <ContactItem type="linkedin"/>
      <ContactItem type="email"/>
      <ContactItem type="github"/>
    </ul>
);

export default ContactList;