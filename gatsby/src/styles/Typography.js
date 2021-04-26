import { createGlobalStyle } from 'styled-components';

import fontTitles from '../assets/fonts/staatliches-v6-latin-regular.woff';
import fontBody from '../assets/fonts/open-sans-v18-latin-regular.woff';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Staatliches;
        src: url(${fontTitles});
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${fontBody});
    }

    html {
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    nav, h1, h2, h3, h4, h5, h6 {
        font-family: Staatliches, sans-serif;
    }
`;

export default Typography;