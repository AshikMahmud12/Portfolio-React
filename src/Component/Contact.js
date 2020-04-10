import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="contact-section" id="contact">
        <div className="row">
          <h2>Get In Touch</h2>
          <p className="little-description">
            1600 pennesylvania, Washington,Dc,20500,United States Of
            America tel:(202) 456-1111
          </p>
        </div>
        <div className="row">
          <form action="https://formspree.io/ashikmahmud12345@gmail.com" method="POST">
            <div className="row">
              <div className="col span_2_of_2">
                <input type="text" name="Name" placeholder="Your Name *" required />
              </div>
              <div className="col span_2_of_2">
                <input type="email" name="Email" placeholder="Your Email *" required />
              </div>
            </div>
            <div className="row">
              <textarea name="Message" cols={30} rows={10} placeholder="Your Message *" required defaultValue={""} />
            </div>
            <div className="row">
              <input type="submit" defaultValue="Send Message" className="btn btn-submit" />
            </div>
          </form>
        </div>
      </section>
        )
    }
}
