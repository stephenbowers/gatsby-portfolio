import React from 'react';
import styled from 'styled-components';
import SEO from "../components/SEO";

const FourOhFourStyles = styled.div`
    place-items: center;
    text-align: center;
    font-size: 3rem;

    @media (max-width: 700px) {
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export default function FourOhFourPage() {
    return (
        <>
            <SEO title={`Page Not Found`} />
            <FourOhFourStyles>
                <p>This is not a stop on the tour.</p>
                <p>Please stick to the posted navigation.</p>
            </FourOhFourStyles>
        </>
    );
}