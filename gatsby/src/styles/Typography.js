import { createGlobalStyle } from 'styled-components';

import font1 from '../assets/fonts/open-sans-v18-latin-regular.woff2';
import font2 from '../assets/fonts/staatliches-v6-latin-regular.woff2';

const Typography = createGlobalStyle`
    @font-face {
        font-family: OpenSans;
        src: url(${font1}) format('woff2');
    }

    @font-face {
        font-family: Staatliches;
        src: url(${font2}) format('woff2');
    }

    html {
        font-family: 'OpenSans', sans-serif;
        color: var(--black);
    }

    nav, h1, h2, h3, h4, h5, h6 {
        font-family: Staatliches, sans-serif;
    }
`;

export default Typography;