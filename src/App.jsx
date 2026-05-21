import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title"> User Directory</h1>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <div className="card" key={user.id}>    
             <h3>{user.name}</h3>
              <div className="info">
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}