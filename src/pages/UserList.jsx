import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1> User Directory</h1>

      <div className="card-container">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            className="user-card"
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}