import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">
      <div className="details-card">

        <h1>{user.name}</h1>

        <p><strong>Username:</strong> {user.username}</p>

        <p><strong>Email:</strong> {user.email}</p>

        <p><strong>Phone:</strong> {user.phone}</p>

        <p><strong>Website:</strong> {user.website}</p>

        <p><strong>Company:</strong> {user.company.name}</p>

        <p>
          <strong>Address:</strong>
          {" "}
          {user.address.street},
          {" "}
          {user.address.suite},
          {" "}
          {user.address.city}
        </p>

        <Link to="/" className="back-btn">
           Back to Users
        </Link>

      </div>
    </div>
  );
}