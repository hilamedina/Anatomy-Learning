// import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link className="Link" to="/Login">
        Log in
      </Link>
      <Link className="Link" to="/AnatomyManger">
        Learn Anatomy
      </Link>
      <Link className="Link" to="/">
        Homepage
      </Link>
      <Link className="Link" to="/Progress">
        Progress
      </Link>
    </div>
  );
}

export default Navbar;
