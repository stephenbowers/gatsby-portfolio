import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout"

const AboutStyles = styled.div`
    display: grid;

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
    }

    h2 {
        text-align: center;
    }

    span {
        text-align: center;
    }
`;

export default function AboutPage() {
    return (
        <Layout>
            <AboutStyles>
                <h2>About</h2>
                <img src="https://via.placeholder.com/200x200" alt="Stephen Bowers Portrait" />
                <span>Tagline</span>
                <p>Biography Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo turpis, sollicitudin non feugiat at, ultrices ut leo. Sed imperdiet vulputate feugiat. Etiam orci dolor, dictum condimentum consectetur non, vulputate eget dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis aliquet egestas magna id efficitur. Curabitur quis augue in mauris accumsan convallis id ac nunc. Sed fermentum massa lorem, maximus convallis magna interdum ac. Ut finibus sapien at auctor lacinia. Proin iaculis nisi ex, in pretium magna porta vitae. Fusce non nibh iaculis, eleifend nulla ut, pretium arcu. Phasellus non dolor aliquet, dapibus sem laoreet, hendrerit enim. Suspendisse potenti.</p>
            </AboutStyles>
            <div>
                <h2>Resume</h2>
                <h3>Work Experience</h3>
                <div>  {/* Resume Grid */}
                    <div> {/* Single Job */}
                        <p>Company Name</p>
                        <p>Dates Worked</p>
                        <p>Location</p>
                        <p>Title</p>
                        <ul> {/* Duties/Details */}
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                        </ul>
                    </div>
                    <div> {/* Single Job */}
                        <p>Company Name</p>
                        <p>Dates Worked</p>
                        <p>Location</p>
                        <p>Title</p>
                        <ul> {/* Duties/Details */}
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                        </ul>
                    </div>
                    <div> {/* Single Job */}
                        <p>Company Name</p>
                        <p>Dates Worked</p>
                        <p>Location</p>
                        <p>Title</p>
                        <ul> {/* Duties/Details */}
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                            <li>Duty Fusce non nibh iaculis, eleifend nulla ut, pretium arcu.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}