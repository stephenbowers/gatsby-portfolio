import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const ProjectsGrid = styled.div`
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
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
        projects: allSanityProject(sort: {fields: placement}) {
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
                    asset {
                        gatsbyImageData(width: 400, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
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
                        <a href={"project/" + project.slug.current}><GatsbyImage image={project.image.asset.gatsbyImageData} alt={project.name} /></a>
                        <a href={project.demoUrl}>{project.name}</a>
                        {project.githubUrl ? <a href={project.githubUrl}>Github Repo</a> : ""}
                        <a href={"project/" + project.slug.current}>More Details</a>
                    </ProjectsStyles>
                ))}
            </ProjectsGrid>
        </>
    );
}