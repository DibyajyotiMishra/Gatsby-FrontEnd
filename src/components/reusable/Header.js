import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function Header({ img, title, subtitle, headerclass }) {
  return (
    <BackgroundImage className={headerclass} fluid={img}>
      <h1 className=" text-info text-uppercase text-center display-4">
        {title}
      </h1>
      <div>
        <h4 className="text-info">{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}
