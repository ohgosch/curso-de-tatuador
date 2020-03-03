module.exports = {
  pathPrefix: `/curso-de-tatuagem-porto-alegre`,
  siteMetadata: {
    title: `Curso de Tatuagem em Porto Alegre | Santa Madre Tattoo`,
    description: `Curso de Tatuagem em Porto Alegre, dividido em módulos e voltado para iniciantes. Confira aqui as informações completas e modalidades do curso.`,
    author: `Gosch, pro@gosch.io`,
    keywords: `curso de tatuagem em porto alegre rs,curso de tatuagem,quanto custa um curso de tatuador,curso de tatuador porto alegre,curso de desenho para tatuagem,curso de tatuador,tatuadores porto alegre,aula de tatuagem,curso para tatuador,curso de tatuagem preço,como ser um tatuador`,
    googleVerification: `uemJfQ2xybC2l4MtyFvFnKQYBI3z8ptH-TP4TcaU_FA`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#D9781F`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        fileName: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
