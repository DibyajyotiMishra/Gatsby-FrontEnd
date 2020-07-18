import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/reusable/Header"
import Info from "../components/reusable/Info"
import DualInfo from "../components/reusable/DualInfo"
import TeamAbout from "../components/about/TeamAbout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Header
      img={data.img.childImageSharp.fluid}
      title="&#9432;  &#10132; ThyDreams &#128516; "
      subtitle=""
      headerclass="about-bg"
    />
    <DualInfo
      heading="A Message From our Team &#128519;"
      img="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Info heading="Our Vision" />
    <TeamAbout />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
