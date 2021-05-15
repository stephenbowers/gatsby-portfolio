import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectStyles = styled.div`
    margin-bottom: 2rem;
    display: grid;
    a {
        font-size: 1rem;
    }
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    .back {
        margin-bottom: 1rem;
    }

    @media (max-width: 550px) {
        padding: 0 1rem;
        img {
            max-width: 300px;
        }
    }
`;

export default function SingleProjectPage({ data }) {
    const { project } = data;
    return (
        <>
        <SEO title={project.name} image={project.image?.asset?.url} />
        <h2>{project.name}</h2>
        <ProjectStyles>
        <Link className="back" to="/portfolio">Back</Link>
            <a className="center" href={project.demoUrl} target="_blank" rel="noopener noreferrer"><GatsbyImage image={project.image.asset.gatsbyImageData} alt={project.name} /></a>
            <a className="center" href={project.demoUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> {project.name}</a>
            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Github Repo</a> : ""}
            <p>{project.description}</p>
        </ProjectStyles>
        </>
    );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node
export const query = graphql`
    query($slug: String!) {
        project: sanityProject(slug: {
            current: { eq: $slug }
        }) {
            name
            id
            description
            githubUrl
            demoUrl
            image {
                asset {
                    gatsbyImageData(width: 800, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }
`;