import React, { Fragment, useEffect } from "react"
import { Link } from "gatsby"
import Lottie from "react-lottie";

import Menu from "./menu"
import { Justify } from "tea-component";

import loadingData from "../lottie/loading.json"

const Layout = ({ location, title, children }) => {
  useEffect(() => {
    const loadingDOM = document.getElementsByClassName('global-loading')[0];

    if( localStorage.getItem('cache') ) {
      loadingDOM.style.display = 'none';
    }else{
      setTimeout(() => {
        localStorage.setItem('cache', true);
        loadingDOM.style.display = 'none';
      }, 5000)
    }
  })

  const defaultLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const socialDom = (
    <a href={`https://github.com/weissleeC`} target="_blank" rel="noreferrer">
      <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>
  )

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
      <h2>
        <Link to="/" className="global-header__link">
          <img className="global-header__logo" src={require("../../content/assets/logo.jpeg")} alt="李立的个人博客" />
          <span className="global-header__title">{title}</span>
        </Link>
      </h2>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="global-container">
          <Justify
            left={header}
            right={
              <Fragment>
                <Menu />
                <div className="global-header__social-media">{socialDom}</div>
              </Fragment>
            }
          />
        </div>
      </header>
      <div className="global-loading">
        <Lottie
          options={defaultLoadingOptions}
          height={300}
          width={300}
        />
      </div>
      <main className="global-body">
        <div className="global-container">
          {children}
        </div>
      </main>
      <footer className="global-footer">
        <div className="global-container">
          <p>Copyright© {new Date().getFullYear()} Lee</p>  
          <p>Powered by <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>&nbsp;&nbsp;备案号 - <a href="https://www.beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备18099555号</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
