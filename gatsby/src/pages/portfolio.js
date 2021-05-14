import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsGrid = styled.div`
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
    place-content: center;
    padding: 1rem;
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
        max-width: 800px;
    }

    .links {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
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
                        gatsbyImageData(width: 800, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
                        <div className="links">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> {project.name}</a>
                            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Github Repo</a> : ""}
                            <a href={"project/" + project.slug.current}>More Details</a>
                        </div>
                    </ProjectsStyles>
                ))}
            </ProjectsGrid>
        </>
    );
}