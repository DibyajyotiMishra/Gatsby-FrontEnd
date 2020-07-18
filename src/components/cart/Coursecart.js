import React, { Component } from "react"
import Img from "gatsby-image"

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
    }
  }
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="text-center display-3">Courses</h1>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-1">
                    <div className="d-flex">
                      <h5 className="mb-0">{node.title}</h5>
                      <h5 className="mb-0 text-primary ml-5">${node.price}</h5>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-outline-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://thydreams.online"
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
