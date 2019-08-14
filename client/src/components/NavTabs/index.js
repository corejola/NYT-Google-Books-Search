import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/Searc" ? "nav-link active" : "nav-link"}>
          Google Book Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
