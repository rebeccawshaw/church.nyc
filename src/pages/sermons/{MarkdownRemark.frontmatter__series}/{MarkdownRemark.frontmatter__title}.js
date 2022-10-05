import React from "react"
import { graphql } from "gatsby"

const sermonTemplate = () => {
  const data = graphql`
    query($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  `
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="sermons-container">
      <div className="sermon-guide">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="sermon-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default sermonTemplate
