import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/" >
          <img src={require("../../content/assets/logo.jpeg")} alt="李立的个人博客" />
          <span>{title}</span>
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/">{title}</Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header>
        {header}
      </header>
      <main>{children}</main>
      <footer>
        Copyright© {new Date().getFullYear()} Lee
        <br />
        Powered by <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>&nbsp;&nbsp;备案号 - <a href="https://www.beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备18099555号</a>
      </footer>
    </div>
  )
}

export default Layout
