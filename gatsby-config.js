/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
    author: "jacky",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`, // 名称，可以用来过滤
        path: `${__dirname}/src/`, // 文件路径
      },
    },
    `gatsby-transformer-remark`,
  ],
}
