import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to handle increment and decrement
  updateCount = (delta) => {
    this.setState((prevState) => {
      let newCount = prevState.count + delta;
      
      // REQUIREMENT: The number can not be less than 0
      if (newCount < 0) {
        newCount = 0;
      }

      return { count: newCount };
    });
  };

  render() {
    return (
      <div className="counter-box">
        {/* REQUIREMENT: Proper Heading Class Component */}
        <h3>Class Component Counter</h3>
        <div className="count-display">{this.state.count}</div>
        <div>
          <button onClick={() => this.updateCount(1)}>+</button>
          <button onClick={() => this.updateCount(-1)}>-</button>
        </div>
      </div>
    );
  }
}

export default CounterClass;