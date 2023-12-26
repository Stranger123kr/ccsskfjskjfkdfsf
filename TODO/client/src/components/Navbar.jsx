import React from "react";
import { Link } from "react-router-dom";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginOut } from "../components/redux/slice/TodoSlice";
import "../App.css";
const Navbar = () => {
  const { isLoading } = useSelector((state) => state.Todo);
  const dispatch = useDispatch();
  const navigationTo = useNavigate();
  // --------------------------------------------

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <b style={{ color: "red", fontSize: "1.7rem" }}>
              Todo <PiBookBookmarkDuotone />
            </b>
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/todo"
                >
                  Todo
                </Link>
              </li>
              {!isLoading && (
                <>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active nav-btn"
                      aria-current="page"
                      to="signup"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active nav-btn"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              {isLoading && (
                <li className="nav-item mx-2">
                  <button
                    className="nav-link active nav-btn"
                    style={{ border: "none" }}
                    aria-current="page"
                    to="#"
                    onClick={() => {
                      localStorage.clear(),
                        // navigationTo("/"),
                        (location.href = "/");
                      dispatch(LoginOut(false));
                    }}
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
