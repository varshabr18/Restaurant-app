import React, { useContext, useState } from "react";
import { LOGO_URL } from "../constants/endpoint";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header({ restroList, setSearchFilter }) {
  const [logbtn, setLogbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const cartitem = useSelector((store) => store.cart.items);
  const { LoggedInUserName } = useContext(UserContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img className="w-20" src={LOGO_URL} />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="/home"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    console.log("restroList", restroList);
                    setSearchFilter(restroList);
                  }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link" href="#">
                  AboutUs
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contactus" class="nav-link" href="#">
                  ContactUs
                </Link>
              </li>
            </ul>
            <Link to="/cart" class="nav-link" href="#">
              <div className="mx-4">
                Cart:<i class="fa-solid fa-cart-arrow-down"></i>
                {cartitem.length}
              </div>
            </Link>
            <span>{LoggedInUserName}</span>
          </div>
        </div>

        <span style={{ whiteSpace: "nowrap" }} className="relative right-20">
          OnlineStatus:&nbsp;
          {onlineStatus ? (
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "green" }}
            ></i>
          ) : (
            <i className="fa-solid fa-circle" style={{ color: "red" }}></i>
          )}
        </span>
        <div className="mr-10">
          <button
            className="btn btn-primary"
            onClick={() => {
              logbtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
            }}
          >
            {logbtn}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
