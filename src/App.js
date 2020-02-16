import React from "react";
import "./styles.css";
import Counter from "./counter";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
      // showErrorComponent: false
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    // this.toggleError = () =>
    //   this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }
  render() {
    console.log("Im rendering from app.js");
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          unmountCounter{" "}
        </button>
        <button onClick={this.ignoreProp}>ignoreProp </button>
        <button onClick={this.seedGenerator}>Seed Generator </button>
        {/* <button onClick={this.toggleError}>toggleError</button> */}

        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            // showErrorComponent={this.state.showErrorComponent}
          />
        ) : null}
      </div>
    );
  }
}
