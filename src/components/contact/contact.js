import React from "react"
import Heading from "../reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3  bg-secondary">
      <Heading title="Tell us your Query" />
      <div className="col-10 col-sm-8 mx-auto">
        <form
          action="https://formspree.io/dibyajyotimishra14@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="mobile number"
              id="mobile number"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
