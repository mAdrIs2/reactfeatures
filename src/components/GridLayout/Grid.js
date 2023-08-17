import React from "react";
import "./Grid.css"

const Grid = () => {
  return (
    <div className="grid-container">
     <div className="item header">This is Grid Layout</div>
     <div className="item section-1">Section 1</div>
     <div className="item section-2">Section 2</div>
     <div className="item section-3">Section 3</div>
     <div className="item section-4">Section 4</div>
     <div className="item footer">Footer</div>
    </div>
  );
};

export default Grid;
