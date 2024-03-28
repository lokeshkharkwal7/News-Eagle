import React from "react";

import { Link } from "react-router-dom";

export default function NavBar({ themeChanger, navTheme }) {
  let navColor = navTheme === "light" ? "success" : "dark";
  let navlook = navTheme === "light" ? "light" : "";
  console.log(`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} `);
  return (
    <div className="mb-2">
      <nav
        // className={`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} `}
        className={`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} fixed-top `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">
            <img src="/newsicon.png" alt="eagle news" width={40} height={40} />
            News Eagle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house-medical mx-1"></i>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  <i class="fa-solid fa-briefcase mx-1"></i>
                  Business
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  <i class="fa-solid fa-video mx-1"></i>
                  Entertainment
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  <i className="fa-solid fa-weight-scale mx-1"></i>
                  Health
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  <i class="fa-solid fa-flask mx-1"></i>
                  Science
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  <i className="fa-solid fa-table-tennis-paddle-ball mx-1"></i>
                  Sports
                </Link>
              </li>{" "}
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/technology">
                  <i className="fa-solid fa-laptop-code mx-1"></i>
                  Technology
                </Link>
              </li>
            </ul>

            <div className="navbar-brand form-check form-switch mx-4">
              <input
                className="navbar-brand form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={themeChanger}
              />
              <label
                className="nav-item nav-link text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                {navTheme === "light" ? (
                  <div
                    className="btn btn-dark"
                    style={{ borderRadius: "20px" }}
                  >
                    <i class="fa-solid fa-sun mx-1 "></i> Light Mode
                  </div>
                ) : (
                  <>
                    <i class="fa-solid fa-moon mx-1 "></i>Dark Mode
                  </>
                )}
              </label>
            </div>

            {/* <form className="navbar-brand d-flex" role="search">
              <input
                className="form-control me-2  mx-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-primary text-light btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
