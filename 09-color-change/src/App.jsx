import React, { useState } from 'react';

const colors = ['pink', 'green', 'blue', 'yellow', 'purple'];

export default function App() {
  const [changeColor, setChangeColor] = useState();

  return (
    <div className={'bg-' + changeColor + '-300'}>
      {colors.map((color) => {
        return (
          <button
            type="button"
            key={color}
            onClick={() => {
              setChangeColor(color);
              console.log(changeColor);
            }}
            className={
              'h-10 px-5 m-2 text-' +
              color +
              '-100 transition-colors duration-150 bg-' +
              color +
              '-600 rounded-lg focus:shadow-outline '
            }
          >
            {color}
          </button>
        );
      })}
    </div>
  );
}
