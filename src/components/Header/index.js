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
        <a className={navStyle.navItem} href="https://medium.com/@imdeepmind">
          Blogs
        </a>
        <Link
          activeClassName={navStyle.active}
          className={navStyle.navItem}
          to="/support"
        >
          Support
        </Link>
        <a
          className={navStyle.navItem}
          href="https://github.com/imdeepmind/NeuralPy"
        >
          Github
        </a>
      </div>
    </nav>
  )
}

export default Header
