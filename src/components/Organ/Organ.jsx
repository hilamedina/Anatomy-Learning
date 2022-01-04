import React from 'react';
import './Organ.css';

export default function Organ(props) {
  return (
    <div className="Organ-Body">
      <div className="Organ-Text">{props.organInfo.description}</div>
      <br />
      <br />
      <button className="Button" onClick={() => props.changeView('bodyView')}>
        ⮐
      </button>
      <button
        className="Button"
        onClick={() => props.changeView('progressView')}
      >
        ䷢
      </button>
    </div>
  );
}
