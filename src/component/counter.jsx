import React from "react";

import "./counter.css";

let Container = ({ initial }) => {
  const [count, setcount] = React.useState(initial);

  return (
    <div>
      <h1>Counter App</h1>
      <p style={count % 2 === 0 ? { color: "green" } : { color: "red" }}>
        {count}
      </p>
      <div className="con">
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          increment
        </button>

        <button
          onClick={() => {
            if (count > 0) {
              setcount(count - 1);
            }
          }}
        >
          decrement
        </button>

        <button
          onClick={() => {
            setcount(count * 2);
          }}
        >
          double
        </button>
      </div>
    </div>
  );
};

export default Container;
