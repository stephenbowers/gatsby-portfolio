import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';

const ContentStyles = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 3.5rem;
`;

const SiteStyles = styled.div`
    position: relative;
    min-height: 100vh;
    
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3rem;
    }
`;

export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles />
            <SiteStyles>
                <Nav />
                    <ContentStyles>
                        {children}
                    </ContentStyles>
                <Footer />
            </SiteStyles>
        </div>
    );
}