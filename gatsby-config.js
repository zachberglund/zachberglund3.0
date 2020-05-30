module.exports = {
  siteMetadata: {
    title: `Zach Berglund's Website`,
    description: `Zach Berglund – sound design, audio implementation, music composition, foley & recording, game design, and unity development`,
    author: `@zachberglund`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zachberglund.com`,
        short_name: `zb`,
        start_url: `/`,
        background_color: `#10161c`,
        theme_color: `#3282ff`,
        display: `minimal-ui`,
        icon: `src/images/zb_logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
