import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DetailsLayout() {
  return (
    <div>
      <NavLink>Details</NavLink>
      <Outlet />
    </div>
  );
}

export default DetailsLayout;
