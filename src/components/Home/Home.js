// import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AnatomyManger from '../AnatomyManger/AnatomyManger';
import Homepage from '../Homepage/Homepage';
import Progress from '../Progress/Progress';
import './Home.css';
// import Body from '../Body/Body';

function Home() {
  return (
    <div className="Home">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" exact component={Homepage}></Route>
        <Route
          exact
          path="/AnatomyManger"
          exact
          component={AnatomyManger}
        ></Route>
        <Route exact path="/Progress" exact component={Progress}></Route>
        {/* <AnatomyManger /> */}
      </BrowserRouter>
    </div>
  );
}

export default Home;
