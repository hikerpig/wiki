module.exports = {
  pathPrefix: `/`, // b. If you are using Netlify/Vercel, your can keep it this way
  siteMetadata: {
    // some SEO configs using by gatsby-theme-kb
    title: `Hikerpig's wiki`, // Replace it with your site's title
    author: `hikerpig`, // Replace it with your name
    description: `My personal knowledge base`, // Replace it with your site's description
  },
  plugins: [
    {
      resolve: `gatsby-theme-kb`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
          "**/.cache/**",
          "**/_site/**",
          "**/_remote_site/**",
          "**/public/**",
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-marka',
      options: {
        container: '.topic-layout__content',
      }
    },
    {
      resolve: `@aaromp/gatsby-plugin-plausible`,
      options: {
        domain: 'wiki.hikerpig.cn',
        customDomain: 'plausible.hikerpig.cn',
      },
    },
  ],
};
