import React from "react";
import styles from "./styles/style.module.css";
const Navbar = () => {
  return (
    <>
      <div id={styles.bgimg}>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="navbar">
              Learn with Me
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#colapsenavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsenavbar">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    Buisness
                  </a>
                </li>
              </ul>
            </div>
            <div id={styles.inputstyle}>
              <input placeholder="Search your item" />
              <button>Submit</button>
            </div>
          </div>
        </nav>
        <div className="conatiner" id={styles.bgimgtext}>
          <h1 className="text-white " id={styles.bgimgtexth1}>
            Welcome to the Polygon Tech
          </h1>
          <p className="text-white">SUBSCRIBE OUR CHANNEL</p>
          <button className="bg-danger p-2">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
