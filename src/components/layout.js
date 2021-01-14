import React, { Fragment, useEffect } from "react"
import { Link } from "gatsby"
import Lottie from "react-lottie";

import Bio from "./bio"
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
                <Bio onlyShowSocial />
              </Fragment>
            }
          />
        </div>
      </header>
      <div className="global-header--gap"></div>
      <div className="global-loading">
        <Lottie
          options={defaultLoadingOptions}
          height={300}
          width={300}
        />
      </div>
      <main>
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
