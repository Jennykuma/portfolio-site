/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectPostTemplate = path.resolve(`src/templates/project-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  } 

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: projectPostTemplate,
      context: {
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node,
      }, // additional data can be passed via context
    })
  })
}