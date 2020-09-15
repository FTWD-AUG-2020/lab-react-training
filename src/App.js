import React from 'react';


function App() {
  return (
    <div>
   <IdCard
    img = "https://randomuser.me/api/portraits/men/20.jpg"
    firstName = 'John'
    lastName = 'Doe'
    gender = 'male'
    birth = '1992-07-14'
    height = '178'
   />
   <IdCard
    img = "https://randomuser.me/api/portraits/women/59.jpg"
    firstName = 'Obrien'
    lastName = 'Delores'
    gender = 'female'
    birth = '1988-05-11'
    height = '172'
   />
    </div>
  );
}

function IdCard(props) {
  return (
    <div>
      <p><img src={props.img} alt="Profile Pic"/></p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Birth: {props.birth}</p>
      <p>Height: {props.height}</p>
     
    </div>
  )
}

export default App;
