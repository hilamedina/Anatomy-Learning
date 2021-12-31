import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <BrowserRouter>
        <Navbar></Navbar>
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default Home;
