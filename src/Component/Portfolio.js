import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-section" id="portfolio">
            <div className="row">
              <h2 className="little-description">Our Portfolio</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit minus non consequuntur! Modi magni tempore
                soluta quam vel odit dolorum!
              </p>
            </div>
            <div className="row">
              <div className="portfolio-filter">
                <button type="button" data-filter="all">ALL</button>
                <button type="button" data-filter=".web">Web</button>
                <button type="button" data-filter=".apps">Apps</button>
                <button type="button" data-filter=".icons">Icons</button>
              </div>
            </div>
            <div className="row container">
              <div className="col span_1_of_2 mix apps box">
                <img src="assets/img/portfolio1.png" alt="Isometric Perspective Mock-Up" className="portfolio-image" />
                <h4>Isometric Perspective Mock-Up</h4>
              </div>
              <div className="col span_1_of_2 mix apps web box">
                <img src="assets/img/portfolio2.png" alt="Time Zone App UI" className="portfolio-image" />
                <h4>Time Zone App UI</h4>
              </div>
              <div className="col span_1_of_2 icons box">
                <img src="assets/img/portfolio3.png" alt="Viro Media Players UI" className="portfolio-image" />
                <h4>Viro Media Players UI</h4>
              </div>
              <div className="col span_1_of_2 icons web apps box">
                <img src="assets/img/portfolio4.png" alt="Blog/Magazine Flat UI Kit" className="portfolio-image" />
                <h4>Blog/Magazine Flat UI Kit</h4>
              </div>
            </div>
            <div className="row">
              <a href="#" className="btn btn-load-more">Load more Project</a>
            </div>
          </section>
        )
    }
}
