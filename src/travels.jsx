import React, { Component } from "react";

class Travels extends Component {
  render() {
    return (
      <div>
        <div>I am a travels component! {this.props.destination}</div>
        <div>I am a travels component! {this.props.country}</div>
        <div>I am a travels component! {this.props.photo}</div>
        <div>I am a travels component! {this.props.distance}</div>
      </div>
    );
  }
}

export default Travels;
