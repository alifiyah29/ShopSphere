import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink
              to="/shoes"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
