import React from 'react';

export default function Organ(props) {
  return (
    <div>
      <button onClick={() => props.changeView()}> return to Body</button>
      {props.organInfo.description}
    </div>
  );
}
