module.exports = {
  siteMetadata: {
    title: "Tyler Wray",
    description: "My special corner of the internet to be myself.",
    author: "@wray_tw"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tyler Wray's Blog",
        short_name: "Blog",
        start_url: "/",
        background_color: "#3F88C5",
        theme_color: "#F9FBFC",
        display: "minimal-ui",
        icon: "src/images/dot.png"
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960
            }
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "+"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-92617795-2"
      }
    },
    "gatsby-plugin-offline"
  ]
}
