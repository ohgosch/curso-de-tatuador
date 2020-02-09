/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import { COLORS } from "../utils/constants";
import { RobotoSlab } from "../utils/font";

const GlobalStyle = createGlobalStyle` 
  ${RobotoSlab}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.background};
  }

  * {
    color: ${COLORS.texts};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
