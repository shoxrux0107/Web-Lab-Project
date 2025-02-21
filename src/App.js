import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Table from "./Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My Beautiful Barca
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team Composition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main content */}
      <div className="container mt-5">
        <h1>Welcome to FC Barcelona Web Page!</h1>
        <p>You have visited the page of the biggest club in the World.</p>
        <a href="#" className="btn-custom">
          Learn More
        </a>
      </div>

      {/* Home Page Component */}
      <Home />
      <Table />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
