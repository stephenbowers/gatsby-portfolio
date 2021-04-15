import { graphql } from 'gatsby';
import React from 'react';

export default function SingleProjectPage() {
    return (
        <p>Single Project Page</p>
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
            image {
                ...ImageWithPreview
            }
        }
    }
`;