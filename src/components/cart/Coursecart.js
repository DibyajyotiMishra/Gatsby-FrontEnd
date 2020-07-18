import React, { Component } from "react"
import Img from "gatsby-image"

const getCategory = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCategory(props.courses.edges),
    }
  }

  categoryClicked = category => {
    let safe = [...this.state.courses]

    if (category === "all") {
      this.setState(() => {
        return { mycourses: safe }
      })
    } else {
      let selected = safe.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { mycourses: selected }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="text-center display-3">Courses</h1>
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="m-3 px-3 btn btn-light"
                    key={index}
                    onClick={() => {
                      this.categoryClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
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
