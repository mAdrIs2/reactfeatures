import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counterApp">
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <span>{count}</span>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Home;
