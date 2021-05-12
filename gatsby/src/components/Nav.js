import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../../static/Logo.svg';

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
        align-self: center;
    }
    .navlink:hover,
    .logo:hover {
        transform: translate(0, 5%);
    }
    a {
        text-decoration: none;
    }

    .logo {
        text-align: left;
        padding-left: 2rem;
        align-self: center;
        padding-top: 1rem;
    }

    .logo img {
        max-width: 200px;
    }

    @media (max-width: 750px) {
        li {
            padding: 0 10px;
        }
    }

    @media (max-width: 650px) {
        li {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 550px) {
        ul {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 450px) {
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
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </li>
                <li className="navlink">
                    <Link to="/about">About</Link>
                </li>
                <li className="navlink">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="navlink">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </NavStyles>
    );
}