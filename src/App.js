import React from 'react';
import CounterClass from './CounterClass'; // Ensure files exist with this casing
import CounterFunction from './CounterFunction'; // Ensure files exist with this casing
import './styles.css'; // Ensure this file exists

function App() {
  return (
    // This wrapper element is mandatory
    <div className="App">
      {/* REQUIREMENT: Show Main heading name */}
      <h1>Assignment-2 Counter Application</h1>

      {/* REQUIREMENT: Show both components in ROW */}
      <div className="counter-row">
        {/* These components MUST be imported with capital letters */}
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;