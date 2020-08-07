import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="flip-card" icon={this.props.icon}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <time>{this.props.date}</time>
            <h4>
              {this.props.title} @{this.props.company}
            </h4>
            <img
              src={this.props.image}
              alt={this.props.image}
              width="90%"
              height="60%"
            />
          </div>
          <div class="flip-card-back">
            <h1>{this.props.descT}</h1>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
