import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function DualInfo({ heading, img }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container table-responsive-sm">
        <Heading title={heading} />
        <div className="row justify-content-center mx-auto">
          <div className="col-9 col-sm-6  mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              odit doloremque ut incidunt eos dicta asperiores dolorem quidem.
              Tempore esse aut asperiores commodi laudantium. Vitae consectetur
              rerum delectus laborum amet assumenda dolorem voluptatem, ducimus
              nostrum sapiente veniam velit necessitatibus. Aspernatur libero
              nemo temporibus atque quas molestiae nostrum soluta sint vero!
            </p>
          </div>
          <div className="col-3 col-sm-6 mx-auto ">
            <div class="card" style={{ width: 14 + "rem" }}>
              <img src={img} class="card-img-top" alt="image" width="50px" />
              <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, nemo.
                </p>
                <Link to="#" class="btn btn-info">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
