import React from 'react';

const Boxes = () => {
  const boxStyle = 'bg-blue-500 h-12 w-12 flex items-center justify-center';
  const renderBoxes = () => {
    const boxes = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        boxes.push(
          <div key={`box-${row}-${col}`} className={boxStyle}>
            {row * 3 + col + 1}
          </div>
        );
      }
    }
    return boxes;
  };

  return <div className="grid grid-cols-3 gap-4">{renderBoxes()}</div>;
};

export default Boxes;
