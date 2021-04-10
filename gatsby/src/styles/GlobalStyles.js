import { createGlobalStyle } from 'styled-components';
import '@fontsource/staatliches';

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

    nav, h1, h2 {
        font-family: 'Staatliches', 'Open Sans', sans-serif;;
    }
`;

export default GlobalStyles;