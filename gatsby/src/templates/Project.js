import { graphql } from 'gatsby';
import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';

export default function SingleProjectPage({ data }) {
    const { project } = data;
    return (
        <>
        <h2>{project.name}</h2>
        <div>
            <SanityImage {...project.image} width={500} height={300} alt={project.name} />
            <a href={project.demoUrl}>{project.name}</a>
            {project.githubUrl ? <a href={project.githubUrl}>Github</a> : ""}
            <p>{project.description}</p>
        </div>
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