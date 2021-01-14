import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "tea-component";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title='Home' keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`]} />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Home' keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`]} />

      <div className="home-post">
        <div className="global-container">
          <Row gap={20}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              console.log(post);
              return(
                <Col className="home-post__list" span={12} key={post.fields.slug}>
                  <article className="home-post__card">
                    <header>
                      <h2 className="home-post__title">
                        <Link to={post.fields.slug} title={title} className="tea-text-overflow">{title}</Link>
                      </h2>
                      <small className="home-post__date">{post.frontmatter.date}</small>
                    </header>
                    <section className="home-post__text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <footer>
                      <div className="home-post__btn">
                        <Link to={post.fields.slug} title={title}>点击查看</Link>
                        <i className="global-icon global-icon--more"></i>
                      </div>
                    </footer>
                  </article>
                </Col>
              )
            })}
          </Row>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
