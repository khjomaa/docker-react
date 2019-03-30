import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {/* <h1>Hi There</h1> */}

          <h1>
            Bye There{" "}
            <span role="img" aria-label="smile">
              😃
            </span>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
