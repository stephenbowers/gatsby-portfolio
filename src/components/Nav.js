import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    border: 1px solid black;
    margin-bottom: 4rem;
    ul {
        margin: 0;
        padding: 0;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        list-style: none;
    }
    li {
        font-size: 2rem;
    }
    a {
            text-decoration: none;
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
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