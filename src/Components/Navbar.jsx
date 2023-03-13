import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Legion">
                  Legion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Metamorph">
                  Metamorph
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Delirium">
                  Delirium
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Harvest">
                  Harvest
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Echoes">
                  Echoes of the Atlas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Ultimatum">
                  Ultimatum
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Expedition">
                  Expedition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Siege">
                  Siege of the Atlas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sentinel">
                  Sentinel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Lake">
                  Lake of Kalandra
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sanctum">
                  The Forbidden Sanctum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
