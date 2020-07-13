import React, { Component } from "react";
import LightsOut from "./LightsOut";
import "./stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LightsOut gridDim={5} prob={0.25} />
        <p>
          <a href="https://www.youtube.com/watch?v=ffCWa3Cppk4">
            Solution (youtube link)
          </a>
        </p>
        <p>
          Thanks to{" "}
          <a href="https://www.1001freefonts.com/search.php?d=1&q=Studio+Typo">
            Studio Typo
          </a>{" "}
          for the font{" "}
          <a href="https://www.1001freefonts.com/typo-round.font">Typo Round</a>
        </p>
      </div>
    );
  }
}

export default App;
