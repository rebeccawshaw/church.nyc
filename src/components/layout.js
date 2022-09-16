/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "@fontsource/lora"
import "@fontsource/poppins"

import Header from "./header"
import "./layout.css"

const prime1 = '#000000'; //black
const prime2 = '#424242'; //dark grey
const prime3 = '#E9E9EB'; //white variation
const prime4 = '#2E579D'; //blue

const second1 = '#DB4708' //orange
const second2 = '#5C7941' //green
const second3 = '#0F8094' //teal
const second4 = '#940F6F' //purple
const second5 = '#CD9A02' //yellow

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
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer 
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
background-color: ${prime1};
color: ${prime3};
min-height: 100vh;

body {
  font-family: Lora;
} 

h1, h2, h3, h4 {
  font-family: Lora;
}

a {
  color: ${prime3};
  margin: 0 1% 0 1%;
}

`

export default Layout
