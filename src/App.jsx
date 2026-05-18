import React, { useState } from "react";
import "./App.css";

export default function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);

  const users = [
    { id: 1, name: "Lokesh", age: 25, city: "Salem" },
    { id: 2, name: "Magesh", age: 24, city: "Chennai" },
    { id: 3, name: "harish", age: 23, city: "Coimbatore" },
    { id: 4, name: "Dinesh", age: 26, city: "Madurai" },
    { id: 5, name: "Suresh", age: 22, city: "Trichy" }
  ];

  return (
    <div className="app">

      <h1>React Conditional & List Rendering</h1>
      
      <div className="section">
        <h2>Login Example</h2>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <p>
          {isLoggedIn ? "Welcome back, User!" : "Please login to continue"}
        </p>
      </div>

      <div className="section">
        <h2>Show / Hide Example</h2>

        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

        {show && <p>This content is visible now </p>}
      </div>

    
      <div className="section">
        <h2>User List</h2>

        <div className="card-container">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>City: {user.city}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}