import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const SermonTemplate = () => {
  const data = useStaticQuery(graphql`
    query SermonPostByPath {
      markdownRemark {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }`
  )

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="sermon-container">
      <div className="sermon-guide">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default SermonTemplate