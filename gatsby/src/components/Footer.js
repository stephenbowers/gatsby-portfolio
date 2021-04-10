import React from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialStyles = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    list-style: none;
    align-content: center;
    margin: 0;
    padding: 0;

    li {
        margin: 0;
        padding: 0;
    }

    a {
        font-size: 1.5rem;
    }
`;

export default function Footer() {
    return (
        <footer>
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
        </footer>
    );
}