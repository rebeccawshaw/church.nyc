import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"

export default function SermonsPage(props) {
  return (
    <Layout>
        <ul>
        {props.data.allMarkdownRemark.nodes.map(markdownRemark => (
            <li key={markdownRemark.frontmatter.series}>
                {console.log(markdownRemark)}
                {markdownRemark.frontmatter.series}: {markdownRemark.frontmatter.title} (<Link to={markdownRemark.sermonPath}>{markdownRemark.sermonPath}</Link>)
            </li>
        ))}
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          series
        }
        sermonPath: gatsbyPath(filePath: "/sermons/{MarkdownRemark.frontmatter__series}/{MarkdownRemark.frontmatter__title}")
      }
    }
  }
`