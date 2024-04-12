import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(1);

  const fizzBuzz = (count) => {
    console.log(count / 3);
    if (count % 15 === 0) return 'fizz-buzz';
    if (count % 3 === 0) return 'fizz';
    if (count % 5 === 0) return 'buzz';
    return count;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">React Fizz Buzz</h1>
        <p>
          Counting incrementally, any number divisible by 3 is replaced by the
          word "fizz", and any number divisible by five with the word "buzz".
        </p>
        <a href="https://en.wikipedia.org/wiki/Fizz_buzz">
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </a>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">{fizzBuzz(count)}</h2>
        <div className="flex mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={(e) => (count <= 1 ? 1 : setCount(count - 1))}
          >
            -
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
