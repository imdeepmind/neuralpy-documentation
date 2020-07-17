import React from "react"

import SEO from "../SEO"
import Header from "../Header/"

import "../../styles/theme.scss";
import "../../styles/main.scss"


const Layout = props => {
  const renderSEO = () => {
    const { title, description, lang, meta } = props
    return (
      <SEO
        title={title || "NeuralPy Deep Learning Library | Documentation"}
        description={
          description ||
          "NeuralPy is a Keras like Deep Learning library that works on top of PyTorch"
        }
        lang={lang || "en"}
        meta={meta || []}
      />
    )
  }

  return (
    <div className="container">
      {renderSEO()}
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
