import { createGlobalStyle } from 'styled-components';
import '@fontsource/staatliches';
import "@fontsource/open-sans";

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #000000; //
        --onyx: #363946; //
        --dimgray: #696773; //
        --morningblue: #819595; //
        --ashgray: #b1b6a6; // 
    }

    body {
        background-color: #dee3e0;
        color: var(--black);
        font-family: 'Open Sans', sans-serif;
    }

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
        font-family: 'Staatliches', 'Open Sans', sans-serif;
        color: var(--dimgray);
        text-align: center;
    }
    a {
        color: var(--dimgray);
    }
    a:visited {
        color: var(--dimgray);
    }
    a:hover {
        color: var(--morningblue);
    }
`;

export default GlobalStyles;