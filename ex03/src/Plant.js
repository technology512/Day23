import React, { Component } from "react";

export class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Flowering plant",
    };
  }

  changeType = () => {
    this.setState({
      type: "Non flowering plant",
    });
  };

  render() {
    return (
      <div>
        <h2>Plant type is {this.state.type}</h2>
        <button type="button" onClick={this.changeType}>
          Change color
        </button>
      </div>
    );
  }
}

export default Plant;
