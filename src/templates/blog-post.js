import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Utterances from '../components/Utterances'

import { Justify, Text } from "tea-component"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog-post__main">
        <article>
          <header className="blog-post__header">
            <h1 className="blog-post__title">{post.frontmatter.title}</h1>
            <p className="blog-post__date">{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="blog-post__nav">
            <Justify
              left={previous && (
                <Link to={previous.fields.slug} className="blog-post__nav-title tea-text-overflow" rel="prev">
                  <Text theme="label">上一篇：</Text><Text className="title">{previous.frontmatter.title}</Text>
                </Link>
              )}
              right={next && (
                <Link to={next.fields.slug} className="blog-post__nav-title tea-text-overflow" rel="next">
                  <Text theme="label">下一篇：</Text><Text className="title">{next.frontmatter.title}</Text>
                </Link>
              ) }
            />
          </div>
          <footer className="blog-post__footer">
            <Utterances title={post.frontmatter.title} />
          </footer>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
