import React from 'react';
import './App.css';
function App() {
  return (
    <div>
      <IdCard
        img="https://randomuser.me/api/portraits/men/20.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        birth="1992-07-14"
        height="178"
      />
      <IdCard
        img="https://randomuser.me/api/portraits/women/59.jpg"
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        birth="1988-05-11"
        height="172"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={80} max={100}/>
    </div>
  );
}

function IdCard(props) {
  return (
    <div>
      <p>
        <img src={props.img} alt="Profile Pic" />
      </p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Birth: {props.birth}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}
function Greetings(props) {
  if (props.lang === 'de') {
    return <div className="greeting">Hallo {props.children}</div>;
  } else if (props.lang === 'fr') {
    return <div className="greeting">Bonjour {props.children}</div>;
  }
}

function Random(props){
  return(
    <div className="randomNums">
  <h3>Random value between {props.min} and {props.max} is {Math.floor(Math.random()*(props.max-props.min)+props.min)}</h3>
    </div> 
)
}

export default App;
