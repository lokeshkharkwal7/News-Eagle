import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src="/newsicon.png" alt="Bootstrap" width={50} height={50} />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    business
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    entertainment
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    health
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    science
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    sports
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>

              <div className="navbar-brand form-check form-switch mx-4">
                <input
                  className="navbar-brand form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  // onClick={setTheme()}
                />
                <label
                  className="nav-item nav-link"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Switch Modes
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
}

export default NavBar;
