import React from "react"
import navStyle from "./header.module.scss"

import logo from "../../assets/logo.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className={navStyle.nav}>
      <Link to="/">
        <img src={logo} alt="NeuralPy logo" className={navStyle.logo} />
      </Link>

      <div className={navStyle.navItems}>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="/"
        >
          Home
        </Link>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="/docs"
        >
          Docs
        </Link>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="/support"
        >
          Support
        </Link>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="https://github.com/imdeepmind/NeuralPy"
        >
          Github
        </Link>
      </div>
    </nav>
  )
}

export default Header
