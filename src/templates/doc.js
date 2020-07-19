import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Doc = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
    >
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`
export default Doc
