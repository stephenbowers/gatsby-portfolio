import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout"

const ProjectsGrid = styled.div`
    display: grid;
    gap: 2rem;
`;

const ProjectsStyles = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    p {
        margin: 0;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default function PortfolioPage() {
    return (
        <Layout>
            <h2 className="center">Portfolio</h2>
            <ProjectsGrid> {/* Grid of Projects */}
                <ProjectsStyles> {/* Individual Project */}
                    <img src="https://via.placeholder.com/500x300" alt="Project" />
                    <a href="/">Title Link</a>
                    <a href="/">Github Link</a> {/* if available */}
                    <a href="/">Click For Details</a>
                    <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo turpis, sollicitudin non feugiat at, ultrices ut leo. Sed imperdiet vulputate feugiat. Etiam orci dolor, dictum condimentum consectetur non, vulputate eget dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet egestas magna id efficitur. Curabitur quis augue in mauris accumsan convallis id ac nunc. Sed fermentum massa lorem, maximus convallis magna interdum ac. Ut finibus sapien at auctor lacinia. Proin iaculis nisi ex, in pretium magna porta vitae. Fusce non nibh iaculis, eleifend nulla ut, pretium arcu. Phasellus non dolor aliquet, dapibus sem laoreet, hendrerit enim. Suspendisse potenti.</p>
                </ProjectsStyles>
                <ProjectsStyles> {/* Individual Project */}
                    <img src="https://via.placeholder.com/500x300" alt="Project" />
                    <a href="/">Title Link</a>
                    <a href="/">Github Link</a> {/* if available */}
                    <a href="/">Click For Details</a>
                    <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo turpis, sollicitudin non feugiat at, ultrices ut leo. Sed imperdiet vulputate feugiat. Etiam orci dolor, dictum condimentum consectetur non, vulputate eget dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet egestas magna id efficitur. Curabitur quis augue in mauris accumsan convallis id ac nunc. Sed fermentum massa lorem, maximus convallis magna interdum ac. Ut finibus sapien at auctor lacinia. Proin iaculis nisi ex, in pretium magna porta vitae. Fusce non nibh iaculis, eleifend nulla ut, pretium arcu. Phasellus non dolor aliquet, dapibus sem laoreet, hendrerit enim. Suspendisse potenti.</p>
                </ProjectsStyles>
                <ProjectsStyles> {/* Individual Project */}
                    <img src="https://via.placeholder.com/500x300" alt="Project" />
                    <a href="/">Title Link</a>
                    <a href="/">Github Link</a> {/* if available */}
                    <a href="/">Click For Details</a>
                    <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo turpis, sollicitudin non feugiat at, ultrices ut leo. Sed imperdiet vulputate feugiat. Etiam orci dolor, dictum condimentum consectetur non, vulputate eget dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet egestas magna id efficitur. Curabitur quis augue in mauris accumsan convallis id ac nunc. Sed fermentum massa lorem, maximus convallis magna interdum ac. Ut finibus sapien at auctor lacinia. Proin iaculis nisi ex, in pretium magna porta vitae. Fusce non nibh iaculis, eleifend nulla ut, pretium arcu. Phasellus non dolor aliquet, dapibus sem laoreet, hendrerit enim. Suspendisse potenti.</p>
                </ProjectsStyles>
            </ProjectsGrid>
        </Layout>
    );
}