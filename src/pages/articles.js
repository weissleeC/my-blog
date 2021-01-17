import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"

const Articles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Articles' keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`]} />
      
      <div className="global-post">
        <div className="global-container">
          <div className="blog-articles__tags" style={{display: 'none'}}>
            <div className="global-post__tags">
              {/* {tags.map((tag, index) => {
                return(
                  <span className={`global-post__tags--${tag}`} key={`global-post__tags--${index}`}>{tag}</span>
                )
              })} */}
            </div>
          </div>
          <PostCard data={posts} showTags />
        </div>
      </div>
    </Layout>
  )
}

export default Articles

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
