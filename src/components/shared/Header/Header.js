import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent fixed-top w-100">
      <div className="container navbar-transparent bg-transparent">
        <a className="a navbar-brand color=sucess">Healthy Food</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          ria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="a nav-link" href="#">
                HEALTHY RECIPES
              </a>
            </li>
            <li className="nav-item">
              <a className="a  nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="a  nav-link" href="#">
                JOIN
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn">
                REGISTER
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
