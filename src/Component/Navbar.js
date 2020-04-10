import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <header id="home">
                <nav>
                    <div className="row">
                        <a href="#">
                            <img
                                src="./assets/img/logo.png"
                                alt="cuda"
                                className="logo"
                            />
                        </a>
                        <ul className="main-nav">
                            <li>
                                <a className="active" href="#home">
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
                        <div className="mobile-menu">
                            <span onclick="openNav()">☰</span>
                            <div id="myNav" className="overlay">
                                <a
                                    href="javascript:void(0)"
                                    onclick="closeNav()"
                                    className="closebtn"
                                >
                                    ×
                                </a>
                                <div className="overlay-content">
                                    <a onclick="closeNav()" href="#home">
                                        HOME
                                    </a>
                                    <a onclick="closeNav()" href="#service">
                                        SERVICE
                                    </a>
                                    <a onclick="closeNav()" href="#team">
                                        TEAM
                                    </a>
                                    <a onclick="closeNav()" href="#skill">
                                        SKILL
                                    </a>
                                    <a onclick="closeNav()" href="#portfolio">
                                        PORTFOLIO
                                    </a>
                                    <a onclick="closeNav()" href="#testimonial">
                                        Testimonial
                                    </a>
                                    <a onclick="closeNav()" href="#contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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
