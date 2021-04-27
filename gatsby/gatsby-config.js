import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
export default {
  /* Your site config here */
  siteMetadata: {
    title: `That Stephen Bowers`,
    siteUrl: 'https://thatstephenbowers.com',
    description: 'The web developer portfolio of Stephen Bowers.',
    twitter: '@StephenReacts',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wl845ngl',
        dataset: 'production',
        apiVersion: '2021-04-16',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
