import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-wrapper">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" alt="Logo" src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-stream"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll text-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Explore Foods
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-number" href="/">
                +92 349 7462877
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
