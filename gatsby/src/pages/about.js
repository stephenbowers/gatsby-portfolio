import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const BioStyles = styled.div`
    display: grid;

    img {
        border-radius: 50%;
    }

    .img-container {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 200px;
        max-height: 200px;
    }

    .container {
        margin: 1rem;
    }

    .bio-text {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 1.5rem;
        font-size: 1.25rem;
        max-width: 600px;
        background-color: white;
        border-radius: 10px;
        filter: drop-shadow(0 0 0.25rem var(--onyx));

        p {
            padding-bottom: 10px;
        }
    }
`;

const ResumeStyles = styled.div`
    margin-bottom: 2rem;

    .school {
        margin-bottom: 10px;
    }

    .container {
        margin: 1rem;
    }

    .job, .school {
        background-color: white;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const query = graphql`
    query JobQuery {
        jobs: allSanityJob(sort: {fields: placement}) {
            nodes {
                id
                company
                startDate(formatString: "MMM YYYY")
                endDate(formatString: "MMM YYYY")
                location
                title
                duties
            }
        }
        schools: allSanityEducation(sort: {fields: placement}) {
                nodes {
                    id
                    school
                    startYear(formatString: "YYYY")
                    endYear(formatString: "YYYY")
                    degree
                }
        }
        bio: sanityBio {
            biography
            tagline
            image {
                asset {
                    gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }
`;


export default function AboutPage({ data }) {
    const jobs = data.jobs.nodes;
    const schools = data.schools.nodes;
    const bio = data.bio;

    return (
        <>
            <BioStyles>
                <SEO title={"About"} />
                <h2>About</h2>
                <div className="img-container">
                    <GatsbyImage image={bio.image.asset.gatsbyImageData} alt={bio.tagline} />
                </div>
                <div className="container">
                    <div className="bio-text">
                        <p>I'm a San Diego based web developer looking for new opportunities and a company to grow with. I am experienced in HTML, CSS, Javascript, and React. I have been  enjoying working with Gatsby.  I also have experience with Wordpress, Node, and MongoDB.</p>
                        <p>In another area of my life, I teach, coach, and perform longform improv comedy. I'm part of a community based on support and collaboration.</p>
                        <p>Fun Fact: I once performed in a show with Kevin McDonald from Kids in the Hall.</p>
                        <p>My hobbies include baking, drawing, painting, writing, tabletop games, and game design.</p>
                    </div>
                </div>
            </BioStyles>

            <h2>Resume</h2>
            <ResumeStyles>
                <div className="container">
                    <h3>Work Experience</h3>
                    <div>  {/* Resume Grid */}
                    {jobs.map((job) => (
                        <div className="job" id={job.id}> {/* Single Job */}
                            <p><em>{job.company}</em></p>
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
                </div>
                <div className="container">
                    <h3>Education</h3>

                    {schools.map((school) => (
                        <div className="school" key={school.id}>
                            <p><em>{school.school}</em></p>
                            <p>{school.startYear} {school.startYear === school.endYear ? '' : ' - ' + school.endYear}</p>
                            <p>{school.degree}</p>
                        </div>
                    ))}
                </div>
            </ResumeStyles>
        </>
    );
}