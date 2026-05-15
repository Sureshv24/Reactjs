import React from "react";

const Child = ({ name, age, city }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      margin: "10px",
      padding: "10px",
      borderRadius: "8px"
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Child;