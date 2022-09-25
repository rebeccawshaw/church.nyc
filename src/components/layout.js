/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "@fontsource/lora"
import "@fontsource/poppins"

import GlobalNav from "./common/navbar"
import Footer from "./common/footer"

const prime1 = '#000000'; //black
const prime2 = '#424242'; //dark grey
const prime3 = '#E9E9EB'; //white variation
const prime4 = '#2E579D'; //blue
const white = 'white';

const second1 = '#DB4708' //orange
const second2 = '#5C7941' //green
const second3 = '#0F8094' //teal
const second4 = '#940F6F' //purple
const second5 = '#CD9A02' //yellow

const Layout = ({children}) => {

  return (
    <Wrapper>
      <GlobalNav />
        <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
background-color: ${white};
color: ${prime1};
min-height: 100vh;

body {
  font-family: Lora;
} 

h1, h2, h3, h4 {
  font-family: Lora;
}

a {
  color: ${prime1};
  margin: 0 1% 0 1%;
}

section {
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  min-width: 100%;
}

footer {
  background-color: ${prime1};
  color: ${white};
}

.nav {
  background-color: ${white}!important;
  border-bottom: 1px;
}

`

export default Layout
