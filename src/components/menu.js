import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="global-navigation">
      <ul className="global-navigation__list">
        <li className="global-navigation__item"><Link to="/" activeClassName="is-active">Home</Link></li>
        {/* <li className="global-navigation__item"><Link to="/articles/" activeClassName="is-active">Articles</Link></li> */}
        <li className="global-navigation__item"><Link to="/about/" activeClassName="is-active">About me</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
