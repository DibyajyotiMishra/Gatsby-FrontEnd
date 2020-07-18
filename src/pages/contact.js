import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/reusable/Header"
import Info from "../components/reusable/Info"
import DualInfo from "../components/reusable/DualInfo"
import SEO from "../components/seo"
import Coursecart from "../components/cart/Coursecart"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Header
      img={data.img.childImageSharp.fluid}
      title="ThyDreams"
      subtitle="www.thydreams.online"
      headerclass="header-bg"
    />
    <Info heading="About Us" />
    <Coursecart courses={data.mycourses} />
    <DualInfo
      heading="Our Team"
      img="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ContactPage
