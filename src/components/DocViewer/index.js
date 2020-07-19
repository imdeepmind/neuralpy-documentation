import React from "react"

import "./docViewer.scss"

const DocViewer = props => {
  const { html } = props

  return (
    <div
      className="documentation"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}

export default DocViewer
