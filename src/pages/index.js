import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='Home' keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`,]} />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Home' keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`]} />

      <div className="global-post">
        <div className="global-container">
          <PostCard data={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          tags
          layout
        }
      }
    }
  }
`
