import React, { useState } from 'react';

// state refers to the current condition or data of a component
// change of state
const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div class="w-screen min-h-screen bg-gradient-to-tr ">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button
          onClick={incrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
