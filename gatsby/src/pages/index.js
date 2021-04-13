import React from "react"
import styled from "styled-components";
import Layout from "../components/Layout"

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

`;
/*
  Tech terms sparkle/grow&shrink like stars?
  Terms rotate in a circle?
  <span>React</span>
        <span>Gatsby</span>
        <span>Javascript</span>
        <span>CSS</span>
        <span>Git</span>
        <span>Bootstrap</span>
        <span>Sanity</span>
        <span>HTML</span>
        <span>Netlify</span>
        <span>Design</span>
*/

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <h1>Stephen Bowers</h1>
        <h2>Web Developer</h2>
        {/* TODO: Add animation or graphic */}
      </HomeStyles>
    </Layout>
  );
}
