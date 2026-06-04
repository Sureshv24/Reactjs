import React, { useState, useEffect } from "react";

export default function Crud() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

   const addItem = () => {
    if (!name.trim() || !email.trim()) {
        return;
    }
   const newUser = {id: user.length + 1,name,email,};
    setUser([...user, newUser]);
    setName("");
    setEmail("");
  };

  const handleEdit = (person) => {
    setName(person.name);
    setEmail(person.email);
    setEditId(person.id);
  };

   const handleUpdate = () => {
    if (!name.trim() || !email.trim()) {
      return;
    }

    const updatedUsers = user.map((person) =>person.id === editId?{...person,name,email,}
        : person
    );
    setUser(updatedUsers);
    setName("");
    setEmail("");
    setEditId(null);
  };

  const handleDelete = (id) => {
    const filteredUsers = user.filter(
      (person) => person.id !== id
    );

    setUser(filteredUsers);
  };

  return (
    <div >
      <h2>USER CRUD TABLE</h2>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {user.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button onClick={() =>handleEdit(person)}>
                  Edit
                </button>
                <button onClick={() =>handleDelete(person.id)}
                  style={{marginLeft: "10px",}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

            <tr>
            <td>#</td>

            <td>
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) =>
                  setName(e.target.value)}/>
            </td>

            <td>
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) =>
                  setEmail(e.target.value)}/>
            </td>

            <td>
              {editId ? (<button onClick={handleUpdate}>Save</button>) :
               (<button onClick={addItem}>Add User</button>)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}