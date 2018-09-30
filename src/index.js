import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { addUpPrimes } from "./prime";

class App extends React.Component {
  state = {
    value: 0,
    primes: []
  };
  onChange = e => {
    this.setState({
      value: e.target.value,
      primes: addUpPrimes(e.target.value)
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello Prime number</h1>
        <h2>I'll show you all prime numbers between 0 and </h2>
        <input
          type="number"
          value={this.state.value}
          onChange={this.onChange}
        />
        <br />
        <div>{this.state.primes.map(num => <span>{num}, </span>)}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
