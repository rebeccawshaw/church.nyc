import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import { graphql } from 'gatsby'
import LoginButton from "../components/login-button";
import Layout from '../components/layout'
import InstagramSection from "../components/instagramSection";


const IndexPage = ( {data} ) => {
return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>
          SUNDAY SERVICES
        </h1>
        <p>
        {`We hope to see you at one of our Sunday Services at our church building on 417 W 57th St. this week. We have four in-person services at 9am, 11am, 4pm, and 6pm. If you have flexibility, we encourage you to attend the 9am or 6pm services where there is ample room for you and friends!\n
        If you cannot make it in person, we will be live-streaming our 11am service. Citykids will be available for the morning services. Pre-Check In for Ci6pmids is available; if you would like to register for CityKids, please email Kristina at kristinat@church.nyc for the sign up link.`}
        </p>
        <div>
          <p>Church of the City New York</p>
          <LoginButton />
          <Link to="/account">Planning Center account</Link>
          <Link to="/calendar">Planning Center account</Link>
        </div>
        <div>
          <InstagramSection />
          {data.allInstaNode.edges.map((item, index) => <img alt={`instagram pic ${index}`} src={item.node.localFile.childImageSharp.fixed.src} />)}
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
query InstagramQuery {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          },
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
}
`
