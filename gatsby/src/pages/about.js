import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SanityImage from 'gatsby-plugin-sanity-image';

const AboutStyles = styled.div`
    display: grid;

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        max-width: 200px;
    }

    h2 {
        text-align: center;
    }

    span {
        text-align: center;
    }
`;

export const query = graphql`
    query JobQuery {
        jobs: allSanityJob {
            nodes {
                id
                company
                startDate(formatString: "")
                endDate(formatString: "")
                location
                title
                duties
            }
        }
        schools: allSanityEducation {
                nodes {
                    id
                    school
                    startYear
                    endYear
                    degree
                }
        }
        bio: sanityBio {
            biography
            tagline
            image {
                ...ImageWithPreview
            }
        }
    }
`;


export default function AboutPage({ data }) {
    const jobs = data.jobs.nodes;
    const schools = data.schools.nodes;
    const bio = data.bio;

    return (
        <Layout>
            <AboutStyles>
                <h2>About</h2>
                <SanityImage {...bio.image} width={200} height={200} alt={bio.tagline} />
                <span>{bio.tagline}</span>
                <p>{bio.biography}</p>
            </AboutStyles>
            <h2>Resume</h2>
            <div>
            <h3>Work Experience</h3>
            <div>  {/* Resume Grid */}
            {jobs.map((job) => (
                
                <div id={job.id}> {/* Single Job */}
                    <p>{job.company}</p>
                    <p>
                        {job.startDate} - {job.endDate === null ? 'Present' : job.endDate}
                    </p>
                    <p>{job.location}</p>
                    <p>{job.title}</p>
                    <ul> {/* Duties/Details */}
                        {job.duties.map((duty, i) =>
                            <li key={i}>{duty}</li>
                        )}
                    </ul>
                </div>
            ))}
            </div>
            <h3>Education</h3>
            
            {schools.map((school) => (
                <div key={school.id}>
                <p>{school.school}</p>
                <p>{school.startYear} {school.startYear === school.endYear ? '' : ' - ' + school.endYear}</p>
                <p>{school.degree}</p>
                </div>
            ))}
            
        </div>
        </Layout>
    );
}