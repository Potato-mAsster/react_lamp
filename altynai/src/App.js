import "./App.css";
import lightoff from "./image/lightoff.jpg";
import lighton from "./image/lighton.png";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }

  changeLight = () => {
    this.setState((prevState) => ({ isOn: !prevState.isOn }));
  };

  render() {
    const { isOn } = this.state;
    document.body.style.backgroundColor = isOn ? "white" : "black";

    return (
      <div>
        <img src={isOn ? lighton : lightoff} alt="Light" />
        <button onClick={this.changeLight}>
          {isOn ? "Off" : "On"}
        </button>
      </div>
    );
  }
}

export default App;
