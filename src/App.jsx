import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}