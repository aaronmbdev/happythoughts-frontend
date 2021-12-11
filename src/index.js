import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import SignIn from "./components/SignIn";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <SignIn/>
        <ParticlesBg type="circle" bg={true}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

