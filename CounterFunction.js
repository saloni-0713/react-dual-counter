import React, { useState } from 'react';

function CounterFunction() {
  // Initialize state using the useState hook
  const [count, setCount] = useState(0);

  // Method to handle increment and decrement
  const updateCount = (delta) => {
    setCount(prevCount => {
      let newCount = prevCount + delta;
      
      // REQUIREMENT: The number can not be less than 0
      if (newCount < 0) {
        newCount = 0;
      }
      return newCount;
    });
  };

  return (
    <div className="counter-box">
      {/* REQUIREMENT: Proper Heading Function Component */}
      <h3>Function Component Counter</h3>
      <div className="count-display">{count}</div>
      <div>
        <button onClick={() => updateCount(1)}>+</button>
        <button onClick={() => updateCount(-1)}>-</button>
      </div>
    </div>
  );
}

export default CounterFunction;