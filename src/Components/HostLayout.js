import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "",
  textDecoration: isActive ? "underline" : "",
  color: isActive ? "#161616" : "",
});
const HostLayout = () => {
  return (
    <div>
      <nav className="hostLayout--nav">
        {/* See below we used merely dot . dot represents the current route */}
        {/* <NavLink to="." style={activeStyle} end>
          Dashboard
        </NavLink> */}
        <NavLink to="." end style={activeStyle}>
          Epub books
        </NavLink>
        <NavLink to="review" style={activeStyle}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default HostLayout;
