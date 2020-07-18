import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/reusable/Header"
import Info from "../components/reusable/Info"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Header
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      headerclass="about-bg"
    />
    <Info heading="How can we help you?" />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
