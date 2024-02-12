import React from "react";

import { Link } from "react-router-dom";

export default function NavBar({ themeChanger, navTheme }) {
  let navColor = navTheme === "light" ? "success" : "dark";
  let navlook = navTheme === "light" ? "light" : "";
  console.log(`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} `);
  return (
    <div>
      <nav
        // className={`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} `}
        className={`navbar navbar-expand-lg navbar-${navlook} bg-${navColor} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">
            <img src="/newsicon.png" alt="eagle news" width={50} height={50} />
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
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  Business
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  Entertainment
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  Health
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  Science
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  Sports
                </Link>
              </li>{" "}
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/technology">
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
                // onClick={setTheme()}
              />
              <label
                className="nav-item nav-link text-light"
                htmlFor="flexSwitchCheckDefault"
              >
                {navTheme === "light" ? "Dark Mode" : "Light Mode"}
              </label>
            </div>

            <form className="navbar-brand d-flex" role="search">
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
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
