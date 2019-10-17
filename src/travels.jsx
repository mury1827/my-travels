import React, { Component } from "react";

class Travels extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.destination}</h1>
        <p>{this.props.country}</p>
        <p>{this.props.photo}</p>
        <img src={this.props.photo} />
        <p>{this.props.distance}</p>
      </div>
    );
  }
}

export default Travels;
