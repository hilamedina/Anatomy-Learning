import React from 'react';
import Body from '../images/Body.png';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="Homepage-Div">
      <div className="Image-Homepage">
        <img src={Body}></img>
      </div>
      <div className="Text-Homepage">
        <br />
        <h1> Learning Anatomy</h1>
        <br />
        Human anatomy is a fun subject, and no matter what the kids want to do
        when they grow up, it is always good to have some knowledge about your
        own body. In this app you can. Learn about the organs of the human body
        Read about their role and location By clicking on the organs. In
        addition, you will keep up with your learning progress
      </div>
    </div>
  );
}
