import React from 'react';
import './Organ.css';

export default function Organ(props) {
  return (
    <div>
      <div className="Organ-Text">{props.organInfo.description}</div>
      <br />
      <br />
      <button className="Button" onClick={() => props.changeView()}>
        ⮐
      </button>
    </div>
  );
}
