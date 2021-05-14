import React from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterStyles = styled.footer`
    padding-bottom: 1rem;
`;

const SocialStyles = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 0;
        padding: 0;
    }

    a {
        display: grid;
        font-size: 2rem;
        color: var(--dimgray);
        align-items: center;
        padding: 5px;
    }
    a:visited {
        color: var(--dimgray);
    }
    a:hover {
        color: var(--morningblue);
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div>
                <SocialStyles>
                    <li>
                        <a href="https://www.linkedin.com/in/stephenbowers">
                            <FaLinkedinIn aria-label="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/stephenbowers">
                            <FaGithub aria-label="GitHub" />
                        </a>
                    </li>
                </SocialStyles>
            </div>
            <p className="center">&copy; Stephen Bowers {new Date().getFullYear()}</p>
        </FooterStyles>
    );
}