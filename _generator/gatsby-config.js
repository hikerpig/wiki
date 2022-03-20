function mySlugify(str) {
  if (!str) return str
  let out = str.trim().replace(/\s+/g, '-')
  return out
}

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
        getPluginMdx(defaultPluginMdx) {
          defaultPluginMdx.options.gatsbyRemarkPlugins.push({
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          })
          return defaultPluginMdx
        },
        slugifyFn: mySlugify,
      },
    },
    {
      resolve: 'gatsby-plugin-marka',
      options: {
        container: '.topic-layout__content',
      }
    },
    // {
    //   resolve: `@aaromp/gatsby-plugin-plausible`,
    //   options: {
    //     domain: 'wiki.hikerpig.cn',
    //     customDomain: 'plausible.hikerpig.cn',
    //   },
    // },
    'gatsby-plugin-no-sourcemaps'
  ],
};
