import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('visitor');

  const handleClear = (e) => {
    e.preventDefault();
    setName('visitor');
    document.getElementById('nameInput').value = ''; // Clear the input field
  };

  return (
    <form className="flex justify-center">
      <div className="w-full max-w-lg px-4">
        <div className="text-center mb-4">
          <h1>Hello, {name}</h1>
        </div>
        <div className="flex items-center">
          <input
            id="nameInput"
            type="text"
            placeholder="Type your name here"
            className="border flex-grow px-4 py-2 rounded"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="ml-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
