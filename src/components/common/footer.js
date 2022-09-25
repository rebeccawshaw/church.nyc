import * as React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.footer`
height: 1000px;
`