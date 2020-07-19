import React, { useState } from "react"

import { hidden } from "./navtab.module.scss"

const NavTab = props => {
  const [visible, setVisible] = useState(false)
  const { title, children, titleClass } = props

  return (
    <ul>
      <p onClick={() => setVisible(visible => !visible)} className={titleClass}>
        {title}
      </p>
      <ul className={visible ? hidden : null}>{children}</ul>
    </ul>
  )
}

export default NavTab
