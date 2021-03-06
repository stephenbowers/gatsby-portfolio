import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    :root {
        --black: #000000; 
        --onyx: #363946;
        --dimgray: #696773; 
        --morningblue: #819595; 
        --ashgray: #b1b6a6; 
        --yellow: #E5D759;
        --blue: #7293C5;
    }

    body {
        background-color: #dee3e0;
        color: var(--black);
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
        color: var(--dimgray);
        text-align: center;
    }

    h2 {
      font-size: 2rem;
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

    .center {
        text-align: center;
    }
`;

export default GlobalStyles;