import React from 'react';
import Body from '../Body/Body';
import { useState } from 'react';
import Organ from '../Organ/Organ';
import { getOrganInfo } from '../Data/Data';

export default function AnatomyManger() {
  const [view, setView] = useState('bodyView');
  const [organName, setOrganName] = useState(undefined);
  const [arrayOfOrgans, setarrayOfOrgans] = useState([]);

  if (view === 'bodyView') {
    return (
      <Body
        setCurrentOrgan={(organ) => {
          setOrganName(organ);
          setView('organView');
        }}
      ></Body>
    );
  } else {
    return (
      <Organ
        changeView={() => {
          setView('bodyView');
        }}
        organInfo={getOrganInfo(organName)}
      />
    );
  }

  //   useEffect(() => {}, []);
  //   return <div></div>;
}
