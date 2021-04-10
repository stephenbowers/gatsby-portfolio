import React from "react"
import styled from "styled-components";
import Layout from "../components/Layout"

const HomeStyles = styled.div`
  h1, h2 {
    text-align: center;
  }
`;

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <h1>Stephen Bowers</h1>
        <h2>Web Developer</h2>
      </HomeStyles>
    </Layout>
  );
}
