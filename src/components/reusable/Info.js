import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function Info({ heading }) {
  return (
    <section className="bg-theme my-5 py-3">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center ">
            <p className="lead text-white mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              laudantium repudiandae magni magnam, voluptates, minima voluptas
              reprehenderit quis aliquid voluptate quos similique tempore
              eveniet amet fuga. Odit praesentium distinctio consequuntur eius
              tempore obcaecati numquam? Quasi sint voluptas molestiae,
              consequuntur esse unde reiciendis laboriosam quos, numquam quod
              voluptates amet necessitatibus delectus accusamus in
              exercitationem excepturi hic est nulla omnis earum. Iste?
            </p>
            <Link to="/about">
              <button className="btn btn-info btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
