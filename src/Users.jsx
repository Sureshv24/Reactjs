import { useSearchParams } from "react-router-dom";
import "./App.css";

export default function App() {
  const users = [
    { id: 1, name: "Lokesh", email: "lokesh@gmail.com", role: "Developer", location: "Salem" },
    { id: 2, name: "Arun", email: "arun@gmail.com", role: "Designer", location: "Chennai" },
    { id: 3, name: "Hari", email: "hari@gmail.com", role: "Tester", location: "Madurai" },
    { id: 4, name: "Vijay", email: "vijay@gmail.com", role: "Manager", location: "Coimbatore" },
    { id: 5, name: "Ajay", email: "ajay@gmail.com", role: "Developer", location: "Erode" },
    { id: 6, name: "Suresh", email: "suresh@gmail.com", role: "Tester", location: "Trichy" },
    { id: 7, name: "Karthik", email: "karthik@gmail.com", role: "Developer", location: "Karur" },
    { id: 8, name: "Manoj", email: "manoj@gmail.com", role: "Designer", location: "Namakkal" },
    { id: 9, name: "Raj", email: "raj@gmail.com", role: "Manager", location: "Vellore" },
    { id: 10, name: "Praveen", email: "praveen@gmail.com", role: "Developer", location: "Chennai" },
    { id: 11, name: "Sanjay", email: "sanjay@gmail.com", role: "Tester", location: "Salem" },
    { id: 12, name: "Ravi", email: "ravi@gmail.com", role: "Developer", location: "Madurai" },
    { id: 13, name: "Dinesh", email: "dinesh@gmail.com", role: "Manager", location: "Trichy" },
    { id: 14, name: "Bala", email: "bala@gmail.com", role: "Designer", location: "Karur" },
    { id: 15, name: "Kumar", email: "kumar@gmail.com", role: "Developer", location: "Coimbatore" },
    { id: 16, name: "Ramesh", email: "ramesh@gmail.com", role: "Tester", location: "Erode" },
    { id: 17, name: "Gokul", email: "gokul@gmail.com", role: "Developer", location: "Chennai" },
    { id: 18, name: "Mohan", email: "mohan@gmail.com", role: "Manager", location: "Salem" },
    { id: 19, name: "Vignesh", email: "vignesh@gmail.com", role: "Designer", location: "Madurai" },
    { id: 20, name: "Surya", email: "surya@gmail.com", role: "Developer", location: "Trichy" }
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage =Number(searchParams.get("page")) || 1;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex =(currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex,startIndex + itemsPerPage);
  const goToPage = (pageNum) => {setSearchParams({ page: pageNum });};
  const prevPage = () =>
    {if (currentPage > 1) 
    {setSearchParams({page: currentPage - 1,});}};

  const nextPage = () => 
    {if (currentPage < totalPages) 
    {setSearchParams({page: currentPage + 1,});
    }
  };

  return (
    <div className="container">
      <h1>User Pagenation</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={
              currentPage === pageNum
                ? "active"
                : ""
            }
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}