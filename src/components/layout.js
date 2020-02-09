/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { COLORS } from "../utils/constants";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
  
  body, html {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${COLORS.background};
  }

  * {
    font-family: 'Roboto Slab', serif;
    color: ${COLORS.texts};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <GlobalStyle />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
