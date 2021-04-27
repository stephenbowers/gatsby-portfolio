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

    .bio-text {
        margin-top: 20px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    p {
        padding-bottom: 10px;
    }
`;

const ResumeStyles = styled.div`
    .school {
        margin-bottom: 10px;
    }
    @media (max-width: 550px) {
        margin: 0 1rem;
    }
`;

export const query = graphql`
    query JobQuery {
        jobs: allSanityJob {
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
        schools: allSanityEducation {
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
                <div className="bio-text">
                    <p>I'm a San Diego based web developer looking for new opportunities and a company to grow with. I am experienced in HTML, CSS, Javascript, and React. I also have experience with Wordpress, Node, and MongoDB.</p>
                    <p>In another area of my life, I teach, coach, and perform longform improv comedy. I'm part of a community based on support and collaboration.</p>
                    <p>Fun Fact: I once performed in a show with Kevin McDonald from Kids in the Hall.</p>
                    <p>My hobbies include baking, drawing, painting, writing, tabletop games, and game design.</p>
                </div>
            </BioStyles>

            <h2>Resume</h2>
            <ResumeStyles>
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
                <h3>Education</h3>

                {schools.map((school) => (
                    <div className="school" key={school.id}>
                        <p><em>{school.school}</em></p>
                        <p>{school.startYear} {school.startYear === school.endYear ? '' : ' - ' + school.endYear}</p>
                        <p>{school.degree}</p>
                    </div>
                ))}
            </ResumeStyles>
        </>
    );
}