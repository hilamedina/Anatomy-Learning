// import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AnatomyManger from '../AnatomyManger/AnatomyManger';
import Homepage from '../Homepage/Homepage';

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <BrowserRouter>
        <Navbar></Navbar>
        <Homepage />
        <AnatomyManger />
      </BrowserRouter>
    </div>
  );
}

export default Home;
