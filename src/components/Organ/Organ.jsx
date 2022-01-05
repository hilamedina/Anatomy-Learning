import React from 'react';
import './Organ.css';
import { AiFillDelete } from 'react-icons/ai';

export default function Organ(props) {
  return (
    <div className="Organ-Body">
      <div className="Organ-Text">{props.organInfo.description}</div>
      <a target="_blank" rel="noreferrer noopene" href={props.organInfo.url}>
        youtube link
      </a>
      <br />
      <br />
      <div className="Button-Div">
        <button className="Button" onClick={() => props.changeView('bodyView')}>
          ⮐
        </button>
        <button
          className="Button"
          onClick={() => props.changeView('progressView')}
        >
          delete <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
