import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <header id="home">
            <nav>
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars" />
              </label>
              
                        <ul >
                            <li>
                                <a  href="#home">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#service">SERVICE</a>
                            </li>
                            <li>
                                <a href="#team">TEAM</a>
                            </li>
                            <li>
                                <a href="#skill">SKILL</a>
                            </li>
                            <li>
                                <a href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li>
                                <a href="#testimonial">Testimonial</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>

                    

                   
                </nav>
                <div className="row">
                    <div className="hero-text-box">
                        <h1>
                            Hi There! We are the new kids on the block and we
                            build awesome websites and mobile apps.
                        </h1>
                        <a href="#contact" className="btn btn-hero">
                            Work with us!
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
