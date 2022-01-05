import React from 'react';
import Body from '../Body/Body';
import { useState } from 'react';
import Organ from '../Organ/Organ';
import { getOrganInfo } from '../Data/Data';
import Progress from '../Progress/Progress';

export default function AnatomyManger() {
  const [view, setView] = useState('bodyView');
  const [organName, setOrganName] = useState(undefined);
  const [arrayOfOrgans, setarrayOfOrgans] = useState([]);

  const organArray = (organ) => {
    arrayOfOrgans.push(organ);
    setarrayOfOrgans(arrayOfOrgans);
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
            console.log(organ);
            return organName === organ;
          });
          console.log(index);
          arrayOfOrgansCopy.splice(index, 1);
          setarrayOfOrgans(arrayOfOrgansCopy);
        }}
        arrayOfOrgans={arrayOfOrgans}
        // completed={progressState}
        completed={Math.floor((arrayOfOrgans.length / 12) * 100)}
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
