/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"
import "typeface-varela-round"
import "typeface-montserrat"
import "typeface-nunito-sans"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1280,
            padding: `1em`,
            paddingTop: 0,
            color: `#515151`,
          }}
        >
          <div>
            <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
            <Fade bottom distance={`25px`}>
              <main style={{ minHeight: `75vh` }}>{children}</main>
              <Footer />
            </Fade>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
