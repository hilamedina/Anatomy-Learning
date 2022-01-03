import React from 'react';
import Body from '../Body/Body';
import { useState } from 'react';
import Organ from '../Organ/Organ';
import { getOrganInfo } from '../Data/Data';

export default function AnatomyManger() {
  const [view, setView] = useState('bodyView');
  const [organName, setOrganName] = useState(undefined);
  const [arrayOfOrgans, setarrayOfOrgans] = useState([]);

  const organArray = (organ) => {
    sivan.push(organ);
    console.log(sivan);
    // setarrayOfOrgans((prevState) => {
    //   [...prevState, organ];
    //   console.log(arrayOfOrgans);
    // return arrayOfOrgans;

    // console.log(arrayOfOrgans);
  };

  if (view === 'bodyView') {
    return (
      <Body
        setCurrentOrgan={(organ) => {
          setOrganName(organ);
          organArray([...sivan, organ]);
          // setarrayOfOrgans((prevState) => {
          //   [...prevState, organ];
          // });
          // console.log(prevState);
          // console.log(arrayOfOrgans);
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
