import React, { Component } from 'react'

export default class Testimonial extends Component {
    render() {
        return (
            <section className="testimonial" id="testimonial">
        <div className="row">
          <h2>What People Say About Us</h2>
          <p className="little-description">Our clients love us</p>
        </div>
        <div className="row">
          <div className="col span_1_of_2 box">
            <div className="client-photo">
              <img src="assets/img/1.jpg" alt="Chanel Iman" />
            </div>
            <div className="client-review">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit pariatur possimus sunt excepturi
                voluptatem ut iure. Dolorum libero ullam pariatur
                neque similique, at
              </q>
              <h3>Chanel Iman</h3>
              <span className="role">CEO Pinterest</span>
            </div>
          </div>
          <div className="col span_1_of_2 box">
            <div className="client-photo">
              <img src="assets/img/2.jpg" alt="Chanel Iman" />
            </div>
            <div className="client-review">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit pariatur possimus sunt excepturi
                voluptatem ut iure. Dolorum libero ullam pariatur
                neque similique, at
              </q>
              <h3>Chanel Iman</h3>
              <span className="role">CEO Pinterest</span>
            </div>
          </div>
          <div className="col span_1_of_2 box">
            <div className="client-photo">
              <img src="assets/img/3.jpg" alt="Chanel Iman" />
            </div>
            <div className="client-review">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit pariatur possimus sunt excepturi
                voluptatem ut iure. Dolorum libero ullam pariatur
                neque similique, at
              </q>
              <h3>Chanel Iman</h3>
              <span className="role">CEO Pinterest</span>
            </div>
          </div>
          <div className="col span_1_of_2 box">
            <div className="client-photo">
              <img src="assets/img/4.jpg" alt="Chanel Iman" />
            </div>
            <div className="client-review">
              <q>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Odit pariatur possimus sunt excepturi
                voluptatem ut iure. Dolorum libero ullam pariatur
                neque similique, at
              </q>
              <h3>Chanel Iman</h3>
              <span className="role">CEO Pinterest</span>
            </div>
          </div>
        </div>
      </section>
        )
    }
}
