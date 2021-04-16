import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    margin-bottom: 4rem;
    ul {
        margin: 0;
        padding: 0;
        text-align: center;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr 1fr;
        list-style: none;
    }
    li {
        font-size: 2rem;
    }
    li:hover {
        transform: translate(0, 5%);
    }
    a {
        text-decoration: none;
    }

    .logo {
        text-align: left;
        padding-left: 2rem;
    }

    @media (max-width: 600px) {
        li {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 400px) {
        ul {
            grid-template-columns: 1fr;
        }
        li {
            font-size: 1.25rem;
        }
        .logo {
            text-align: center;
            padding-left: 0;
        }
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li className="logo">
                    <Link to="/">ThatStephenBowers</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </NavStyles>
    );
}