import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .center {
        text-align: center;
    }

    img {
        max-width: 100%;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;