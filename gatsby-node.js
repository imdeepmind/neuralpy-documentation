const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/doc.js`)

  const result = await graphql(`
    query loadPagesQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/docs/${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
