import React from "react"
import { graphql } from "gatsby"
import Lottie from "react-lottie";

import Layout from "../components/layout"
import SEO from "../components/seo"

import pageData from "../lottie/404.json"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const defaultPageOptions = {
    loop: true,
    autoplay: true,
    animationData: pageData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404 Not Found" />
      <Lottie
        options={defaultPageOptions}
        height={800}
        width={1180}
        isStopped={pageData}
      />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
