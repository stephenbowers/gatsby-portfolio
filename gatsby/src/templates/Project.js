import { graphql, Link } from 'gatsby';
import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';
import Seo from '../components/Seo';
import styled from 'styled-components';

const ProjectStyles = styled.div`
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

    @media (max-width: 400px) {
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
        <Seo title={project.name} image={project.image?.asset?.url} />
        <h2>{project.name}</h2>
        <ProjectStyles>
        <Link className="back" to="/portfolio">Back</Link>
            <a className="center" href={project.demoUrl}><SanityImage {...project.image} alt={project.name} /></a>
            <a className="center" href={project.demoUrl}>{project.name}</a>
            {project.githubUrl ? <a href={project.githubUrl}>Github Repo</a> : ""}
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