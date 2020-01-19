/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
const manifest = require('./config/manifest.json');

const { GOOGLE_ANALYTICS_TRACKING_ID } = process.env;

/**
 * @TODO: Add hotjar
 * Hotjar -> How users use the website
 */

let plugins = [
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: GOOGLE_ANALYTICS_TRACKING_ID || 'none',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/assets/images`,
      name: 'images',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sass',
  'gatsby-plugin-smoothscroll',
  { resolve: 'gatsby-plugin-manifest', options: manifest },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '@common': path.join(__dirname, 'src/@common'),
      stylesheets: path.join(__dirname, 'src/stylesheets'),
      assets: path.join(__dirname, 'src/assets'),
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
      threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
      once: true, // Defines if animation needs to be launched once
      disable: false, // Flag for disabling animations
    },
  },
];

module.exports = {
  siteMetadata: {
    title: `David Benavidez - your friendly neighborhood developer`,
  },
  plugins,
};
