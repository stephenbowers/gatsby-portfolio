import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';

const ProjectsGrid = styled.div`
    display: grid;
    gap: 2rem;
`;

const ProjectsStyles = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    text-align: center;
    p {
        margin: 0;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 500px;
    }

    @media (max-width: 550px) {
        img {
            max-width: 300px;
        }
    }
`;

export const query = graphql`
    query ProjectQuery {
        projects: allSanityProject {
            nodes {
                name
                slug {
                    current
                }
                description
                githubUrl
                demoUrl
                id
                image {
                    ...ImageWithPreview
                }
            }
        }
    }
`;

export default function PortfolioPage({ data }) {
    const projects = data.projects.nodes;
    
    return (
        <>
            <SEO title={"Portfolio"} />
            <h2 className="center">Portfolio</h2>
            <ProjectsGrid> {/* Grid of Projects */}
                {projects.map((project) => (
                    <ProjectsStyles key={project.id}> {/* Individual Project */}
                        <a href={"project/" + project.slug.current}><SanityImage {...project.image} width={500} height={300} alt={project.name} /></a>
                        <a href={project.demoUrl}>{project.name}</a>
                        {project.githubUrl ? <a href={project.githubUrl}>Github Repo</a> : ""}
                        <a href={"project/" + project.slug.current}>More Details</a>
                    </ProjectsStyles>
                ))}
            </ProjectsGrid>
        </>
    );
}