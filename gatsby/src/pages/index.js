import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const HomeStyles = styled.div`
  
  h1, h2 {
    text-align: center;
    color: var(--onyx);
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Seo title={'Home'} />
      <HomeStyles>
        <h1>Stephen Bowers</h1>
        <h2>Web Developer</h2>
      </HomeStyles>
    </>
  );
}
