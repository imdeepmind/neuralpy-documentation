import React from "react"

import heroStyle from "./hero.module.scss"

import logo from "../../assets/logo_with_name.png"

const Hero = () => {
  return (
    <div className={heroStyle.container}>
      <img src={logo} alt="" />
      <p className={heroStyle.title}>
        A <strong>Keras</strong> like <strong>Deep Learning</strong> library
        that works on top of <strong>PyTorch</strong>
      </p>
    </div>
  )
}

export default Hero
