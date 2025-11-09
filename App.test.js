// src/CounterClass.js
import React, { Component } from 'react';
import './styles.css';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    // Use Component property to manage state
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    // **Requirement: The number can not be less than 0**
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        {/* **Requirement: Give proper Heading Class Component** */}
        <h3>Class Component Counter</h3>
        <div className="count-display">{this.state.count}</div>
        <div className="button-group">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default CounterClass;