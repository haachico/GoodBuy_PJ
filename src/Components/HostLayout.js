import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div>
      <nav className="hostLayout--nav">
        {/* <Link to="/host">Dashboard</Link> */}
        {/* <Link to="income">income</Link> */}
        <Link to="/host">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default HostLayout;
