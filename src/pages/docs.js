import React from "react"

import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

const Docs = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              contents {
                id
                name
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Documentation</h1>
    </Layout>
  )
}
export default Docs
