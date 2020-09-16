import React from 'react';
import profiles from '../data/berlin.json';

console.log(profiles);

const Facebook = () => {
  return profiles.map((eachProf) => {
    return (
      <div>
        <li>
          <img src={eachProf.img} alt="prof" />
        </li>
        <li>First name: {eachProf.firstName}</li>
        <li>Last name: {eachProf.lastName}</li>
        <li>Country: {eachProf.country}</li>
      </div>
    );
  });
};

export default Facebook;
