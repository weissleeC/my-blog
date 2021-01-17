import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "tea-component"

const PostCard = (props) => {
  const { data, showTags } = props

  return (
    <Row gap={20}>
      {data.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const tags = post.frontmatter.tags
        return(
          <Col className="global-post__list" span={12} key={post.fields.slug}>
            <article className="global-post__card">
              <header>
                <h2 className="global-post__title">
                  <Link to={post.fields.slug} title={title} className="tea-text-overflow">{title}</Link>
                </h2>
                {showTags &&(
                  <div className="global-post__tags">
                    {tags.map((tag, index) => {
                      return(
                        <span className={`global-post__tags--${tag}`} key={`global-post__tags--${index}`}>{tag}</span>
                      )
                    })}
                  </div>
                )}
                <small className="global-post__date">{post.frontmatter.date}</small>
              </header>
              <section className="global-post__text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
              <footer>
                <div className="global-post__btn">
                  <Link to={post.fields.slug} title={title}>点击查看</Link>
                  <i className="global-icon global-icon--more"></i>
                </div>
              </footer>
            </article>
          </Col>
        )
      })}
    </Row>
  )
}

export default PostCard;
