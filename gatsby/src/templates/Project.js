import { graphql, Link } from 'gatsby';
import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';
import styled from 'styled-components';

const ProjectStyles = styled.div`
    display: grid;
    a {
        font-size: 1rem;
        padding-bottom: 1rem;
    }
`;

export default function SingleProjectPage({ data }) {
    const { project } = data;
    return (
        <>
        <SEO title={project.name} image={project.image?.asset?.url} />
        <h2>{project.name}</h2>
        <ProjectStyles>
        <Link to="/portfolio">Back</Link>
            <SanityImage {...project.image} width={500} height={300} alt={project.name} />
            <a href={project.demoUrl}>{project.name}</a>
            {project.githubUrl ? <a href={project.githubUrl}>Github</a> : ""}
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
                ...ImageWithPreview
            }
        }
    }
`;