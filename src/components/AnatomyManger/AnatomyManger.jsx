import React from 'react';
import Body from '../Body/Body';
import { useState, useEffect } from 'react';
import Organ from '../Organ/Organ';
import { getOrganInfo } from '../Data/Data';
import Progress from '../Progress/Progress';

export default function AnatomyManger() {
  const [view, setView] = useState('bodyView');
  const [organName, setOrganName] = useState(undefined);
  const [arrayOfOrgans, setarrayOfOrgans] = useState([]);
  // const [progressState, setprogressState] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(arrayOfOrgans);
  }, [arrayOfOrgans]);

  const organArray = (organ) => {
    arrayOfOrgans.push(organ);
    setarrayOfOrgans(arrayOfOrgans);
    // setarrayOfOrgans([...arrayOfOrgans, organ]);

    // setprogressState((arrayOfOrgans.length / 12) * 100);
  };
  const setCurrentOrgan = (organ) => {
    setOrganName(organ);
    organArray(organ);
    console.log('setcurrent', arrayOfOrgans);
    setView('organView');
  };

  if (view === 'bodyView') {
    return <Body setCurrentOrgan={setCurrentOrgan}></Body>;
  }
  if (view === 'progressView') {
    return (
      <Progress
        returnToBody={() => {
          setView('bodyView');
        }}
        onDelete={(organ) => {
          let arrayOfOrgansCopy = [...arrayOfOrgans];
          const index = arrayOfOrgansCopy.findIndex((organName) => {
            console.log('dudi', organ);
            return organName == organ;
          });
          console.log('dudi', index);
          arrayOfOrgansCopy.splice(index, 1);
          setarrayOfOrgans(arrayOfOrgansCopy);
        }}
        arrayOfOrgans={arrayOfOrgans}
        // completed={progressState}
        completed={(arrayOfOrgans.length / 12) * 100}
      ></Progress>
    );
  } else {
    return (
      <Organ
        changeView={(view) => {
          setView(view);
        }}
        organInfo={getOrganInfo(organName)}
      />
    );
  }
}

//   useEffect(() => {}, []);
//   return <div></div>;
