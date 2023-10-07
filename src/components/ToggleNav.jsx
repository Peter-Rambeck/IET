import React, { useState } from "react";
import "../assets/css/button.css";

const LogicalNot = () => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      )}
    </>
  );
};
export default LogicalNot;
