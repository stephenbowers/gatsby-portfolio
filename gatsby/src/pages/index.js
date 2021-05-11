import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import BowTie from '../assets/images/BowTie.svg';

const HomeStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  place-content: center;

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

  .bow-tie {
    max-width: 600px;
    animation: tilt 2s linear alternate-reverse infinite;
  }

  .image-container {
    display: flex;
    place-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @keyframes tilt {
    0% {
      transform: rotate(-10deg)
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 700px) {
    .bow-tie {
      max-width: 400px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 500px) {
    .bow-tie {
      max-width: 300px;
    }
  }


`;

export default function Home() {
  return (
    <>
      <SEO title={'Home'} />
      <HomeStyles>
        <h1>Stephen Bowers</h1>
        <h2>Web Developer</h2>
        <div className="image-container">
          <img className="bow-tie" src={BowTie} alt="bowtie" />
        </div>
      </HomeStyles>
    </>
  );
}
