import React from "react"
import { Link } from "gatsby"
import { Justify } from "tea-component";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/" className="global-header__link">
          <img className="global-header__logo" src={require("../../content/assets/logo.jpeg")} alt="李立的个人博客" />
          <span className="global-header__title">{title}</span>
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/" className="global-header__link">
        <img className="global-header__logo" src={require("../../content/assets/logo.jpeg")} alt="李立的个人博客" />
        <span className="global-header__title">{title}</span>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="global-container">
          <Justify
            left={header}
            right={
              <>
                111
              </>
            }
          />
        </div>
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
