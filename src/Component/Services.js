import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section className="services-section js--services-section" id="service">
            <div className="row">
              <h2>
                Services We provide
              </h2>
              <p className="little-description">
                We are working with both individuals and businesses from all
                over the globe to create awesome websites and applications"
              </p>
            </div>
            <div className="row">
              <div className="col span_1_of_4 box">
                <img src="assets/img/flag.png" alt="Flag" className="services-icon" />
                <h3>Branding</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi fugit dicta consequuntur libero!
                </p>
              </div>
              <div className="col span_1_of_4 box">
                <img src="assets/img/crayon.png" alt="Crayon" className="services-icon" />
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi fugit dicta consequuntur libero!
                </p>
              </div>
              <div className="col span_1_of_4 box">
                <img src="assets/img/gears.png" alt="Gears" className="services-icon" />
                <h3>Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi fugit dicta consequuntur libero!
                </p>
              </div>
              <div className="col span_1_of_4 box">
                <img src="assets/img/rocket.png" alt="Rocket" className="services-icon" />
                <h3>Rocket Science</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi fugit dicta consequuntur libero!
                </p>
              </div>
            </div>
          </section>
        )
    }
}
