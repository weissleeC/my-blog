import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Utterances from '../components/Utterances'

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" keywords={[`blog`, `gatsby`, `javascript`, `Lee' s blog`, `李立的个人博客`, `李立`, `About me`]} />
      <div className="global-container">
        <div className="blog-about__main">
          <div className="blog-about__info">
            <ul>
              <li><Bio /></li>
              <li>坚持写文章，记录每一天的成长。</li>
              <li>嘿嘿～ 博客改版成功，之前的用 WP 真的太卡了。安利一下 <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> 这个博客脚手架，真的太好用了。</li>
              <li>请给我留言吧 ：）</li>
            </ul>
          </div>
          <Utterances title="about me" />
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
