import React, { useState } from 'react';

const colors = ['pink', 'green', 'blue', 'yellow', 'purple'];

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const changeColor = (color) => setBackgroundColor(color);

  return (
    <div
      className="h-screen flex flex-wrap justify-center items-center"
      style={{ backgroundColor }}
    >
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => changeColor(color)}
          className={`h-10 px-5 m-2 text-${color}-100 transition-colors duration-150 bg-${color}-600 rounded-lg focus:shadow-outline border-dashed border-2 border-${color}-500`}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

// here className as dynamic setting up will not work
// ref: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
