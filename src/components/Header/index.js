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
        <Link className={navStyle.navItem} to="/home">Home</Link>
        <Link className={navStyle.navItem} to="/docs">Docs</Link>
        <Link className={navStyle.navItem} to="/blogs">Blogs</Link>
        <Link className={navStyle.navItem} to="/support">Support</Link>
        <Link className={navStyle.navItem} to="/github">Github</Link>
      </div>
    </nav>
  )
}

export default Header
