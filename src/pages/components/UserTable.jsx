import useFetchData from "../hooks/useFetchData";

export default function UserTable() {
  const {data: users,loading,error} = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }
  if (error) {
    return <h2 className="status">{error}</h2>;
  }
  return (
    <div className="container">
      <h1>User Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}