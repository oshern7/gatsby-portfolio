const regexExclude404 = /^(?!\/(dev-404-page|404)).*$/;

module.exports = {
  siteMetadata: {
    siteTitle: "My Portfolio",
    url: "https://sleepy-savannah-91627.herokuapp.com",
    name: "My Portfolio",
    email: "fullstackdevs@outlook.com",
    segment: "KrpuBOMB62nTKrcoFBpMoZQEKKIJllxU",
    description: "This is Portfolio website built with Gatsby.",
    twitter: "",
    shareImage:
      "https://sleepy-savannah-91627.herokuapp.com/images/about/shakey-0.gif",
    siteName: "sleepy-savannah-91627.herokuapp.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-javascript-frontmatter",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              url
            }
          }

          allSitePage(
            filter: {
              path: {
                regex: "${regexExclude404}"
              }
            }
          )  {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: "daily",
              priority: 0.7
            };
          })
      }
    }
  ]
};
