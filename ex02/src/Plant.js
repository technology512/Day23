import React, { Component } from "react";

export class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Flowering plant",
    };
  }
  render() {
    return <h2>Plant type is {this.state.type}</h2>;
  }
}

export default Plant;
