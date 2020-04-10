import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <section className="skill-section" id="skill">
            <div className="row">
              <h2>We Got Skill</h2>
              <p className="little-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore voluptates placeat soluta laboriosam quisquam unde
                eius? Voluptatem, aut quam. Nisi accusamus asperiores, nobis
                dolor in eos eum molestiae numquam recusandae!
              </p>
            </div>
            <div className="row">
              <div className="col span_1_of_4 box">
                <svg className="radial-progress html-css" data-percentage={90} viewBox="0 0 80 80">
                  <circle className="incomplete" cx={40} cy={40} r={35} />
                  <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                  <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                    90%
                  </text>
                </svg>
                <h3>Web Design</h3>
              </div>
              <div className="col span_1_of_4 box">
                <svg className="radial-progress graphic-design" data-percentage={75} viewBox="0 0 80 80">
                  <circle className="incomplete" cx={40} cy={40} r={35} />
                  <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                  <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                    75%
                  </text>
                </svg>
                <h3>HTML/CSS</h3>
              </div>
              <div className="col span_1_of_4 box">
                <svg className="radial-progress web-design" data-percentage={70} viewBox="0 0 80 80">
                  <circle className="incomplete" cx={40} cy={40} r={35} />
                  <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                  <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                    70%
                  </text>
                </svg>
                <h3>Graphic Design</h3>
              </div>
              <div className="col span_1_of_4 box">
                <svg className="radial-progress ui-ux" data-percentage={85} viewBox="0 0 80 80">
                  <circle className="incomplete" cx={40} cy={40} r={35} />
                  <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                  <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                    85%
                  </text>
                </svg>
                <h3>UI/UX</h3>
              </div>
            </div>
          </section>
        )
    }
}
