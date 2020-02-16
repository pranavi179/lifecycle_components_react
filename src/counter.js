import React from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    console.log("IN constructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      initializing: true
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component did mount ");
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 500);
    console.log("*********************");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("In sholud component update -Don't Render");
      return false;
    }
    console.log("In should component update-Do Render");

    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    return null;
  }
  render() {
    console.log("im rendering from counter");
    if (this.state.initializing) {
      return <div>initializing</div>;
    }
    // if (this.props.showErrorComponent && this.state.error) {
    //   return (
    //     <div>We have encountered an error {this.state.error.message} </div>
    //   );
    // }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>Hi</h1>
        <div className="counter">Counter = {this.state.counter}</div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }
  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("Component did update");
    console.log("**********************");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("**********************");
  }
  componentDidCatch(error, info) {
    console.log("Component Did catch");
    this.setState({ error, info });
  }
}
