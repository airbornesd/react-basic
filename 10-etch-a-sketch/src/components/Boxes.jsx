import React from 'react';
import './Boxes.css';

let count = 16;

const Boxes = () => {
  function changeBackground(e) {
    if (e.target.style.background === 'white') {
      e.target.style.background = 'black';
    } else {
      e.target.style.background = 'white';
    }
  }

  const renderBoxes = () => {
    const boxes = [];
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        boxes.push(
          <div className="aspect-square" onMouseOver={changeBackground}></div>
        );
      }
    }
    return boxes;
  };

  return <div className="grid-container">{renderBoxes()}</div>;
};

export default Boxes;
