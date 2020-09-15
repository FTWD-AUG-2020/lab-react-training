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
      <Random min={1} max={6} />
      <Random min={80} max={100} />
      <BoxColor
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

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

function Random(props) {
  return (
    <div className="randomNums">
      <h3>
        Random value between {props.min} and {props.max} is{' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </h3>
    </div>
  );
}

function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <h3>
        RGB:({r},{g},{b})
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
      </h3>
    </div>
  );
}

function CreditCard(props) {
  return (
    <div className="CC">
      <p>Type: {props.type}</p>
      <p>Number: {props.number}</p>
      <p>Expires on: {props.expMonth}, {props.expYear}</p>
      <p>Bank: {props.bank}</p>
      <p>Owner: {props.owner}</p>
      <p>BGColour: {props.bgColor}</p>
      <p>Colour: {props.color}</p>
    </div>
  )
}

export default App;
