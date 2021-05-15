import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import VelvetRopes from '../assets/images/velvetropes.svg';

const FourOhFourStyles = styled.div`
    place-items: center;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;

    .image-container {
        padding: 1rem;
    }

    .velvet-rope {
        max-width: 1fr;
        min-width: 
    }

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
                <div className="image-container">
                    <img className="velvet-rope" src={VelvetRopes} alt="velvet rope" />
                </div>
                <p>This is not a stop on the tour.</p>
                <p>Please stick to the posted navigation.</p>
            </FourOhFourStyles>
        </>
    );
}