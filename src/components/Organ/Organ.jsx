import React from 'react';
import './Organ.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';

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
          <BsArrowReturnLeft className="Icon-Of" />
        </button>
        <button
          className="Button"
          onClick={() => props.changeView('progressView')}
        >
          <AiFillDelete className="Icon-Of" />
        </button>
      </div>
    </div>
  );
}
