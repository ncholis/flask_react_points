/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, logout } from "../auth";

const LoggedInLinks = () => {
  const history = useNavigate();

  return (
    <>
      <li className="nav-item text-black">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/reward">
          My Rewards
        </Link>
      </li>
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#"
          onClick={() => {
            fetch("/auth/logout/")
              .then((res) => res.json())
              .then((data) => {
                alert("Logged out");
                console.log(data);
              })
              .catch((err) => console.log(err))
              .finally(() => {
                logout();
                history("/");
              });
          }}
        >
          Log Out
        </a>
      </li>
    </>
  );
};

const LoggedOutLinks = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/signup">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/login">
          Login
        </Link>
      </li>
    </>
  );
};

const NavBar = () => {
  const [logged] = useAuth();

  return (
    <div className="container">
      <nav className="js-mega-menu navbar navbar-expand-md header-nav hs-menu-initialized hs-menu-horizontal">
        <img
          src="/logo-pabrikonline-colored.png"
          alt="logo"
          className="img-fluid mb-4"
        ></img>

        <button
          type="button"
          className="navbar-toggler btn"
          aria-expanded="false"
          aria-controls="navBar"
          data-toggle="collapse"
          data-target="#navBar"
        >
          <span id="hamburgerTrigger">
            <span className="ti-menu"></span>
          </span>
        </button>

        <div className="collapse navbar-collapse p-3" id="navbarNav">
          <ul className="navbar-nav">
            {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
          </ul>
        </div>
      </nav>
    </div>
  );
};

//return (
//  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//    <div className="container-fluid">
//      <Link className="navbar-brand" to="/">
//        Rewards
//      </Link>
//      <button
//        className="navbar-toggler"
//        type="button"
//        data-bs-toggle="collapse"
//        data-bs-target="#navbarNav"
//        aria-controls="navbarNav"
//        aria-expanded="false"
//        aria-label="Toggle navigation"
//      >
//        <span className="navbar-toggler-icon"></span>
//      </button>
//      <div className="collapse navbar-collapse" id="navbarNav">
//        <ul className="navbar-nav">
//          {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
//        </ul>
//      </div>
//    </div>
//  </nav>
//);
//};

//  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//    <div className="container-fluid">
//      <Link className="navbar-brand" to="/">
//        Rewards
//      </Link>
//      <button
//        className="navbar-toggler"
//        type="button"
//        data-bs-toggle="collapse"
//        data-bs-target="#navbarNav"
//        aria-controls="navbarNav"
//        aria-expanded="false"
//        aria-label="Toggle navigation"
//      >
//        <span className="navbar-toggler-icon"></span>
//      </button>
//      <div className="collapse navbar-collapse" id="navbarNav">
//        <ul className="navbar-nav">
//          {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
//        </ul>
//      </div>
//    </div>
//  </nav>

export default NavBar;
