import React, { useState } from "react";
import "./App.css";

export default function App() {

  
  const [count, setCount] = useState(0);

 
  const [isDark, setIsDark] = useState(false);

  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "app dark" : "app light"}>

      <h1>Counter & Theme Toggle</h1>
      <div className="card">
        <h2>Counter</h2>
        <h1 className="count">{count}</h1>

        <div className="btn-group">
          <button onClick={increment}> Increment</button>
          <button onClick={decrement}> Decrement</button>
          <button onClick={reset}> Reset</button>
        </div>
      </div>
      <div className="card">
        <h2>Theme</h2>
        <button onClick={toggleTheme}>
          {isDark ? " Light Mode" : "Dark Mode"}
        </button>
      </div>

    </div>
  );
}