import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Services from "./pages/Services";

import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUX from "./pages/UIUX";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/profile">Profile</NavLink>

      </nav>

      {/* routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />

        {/* Nested Routing */}
        <Route path="/services" element={<Services />}>

          <Route path="web" element={<WebDevelopment />} />

          <Route path="app" element={<AppDevelopment />} />

          <Route path="uiux" element={<UIUX />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}