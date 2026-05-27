import { NavLink, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div className="page">

      <h1>Welcome to <br/> Our Services Page...!</h1>

      {/* Nested Menu */}
      <div className="sub-nav">

        <NavLink to="web">Web Development</NavLink>

        <NavLink to="app">App Development</NavLink>

        <NavLink to="uiux">UI/UX Design</NavLink>

      </div>

      <Outlet />

    </div>
  );
}